import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Pusher from "pusher-js";
import axios from "../axios";

import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

const Home = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get("/messages/sync").then((res) => {
            setMessages(res.data);
        });
    }, []);

    useEffect(() => {
        const pusher = new Pusher("163612a7213d95a362bb", {
            cluster: "mt1",
        });

        const channel = pusher.subscribe("messages");
        channel.bind("inserted", function (newMessage) {
            setMessages([...messages, newMessage]);
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [messages]);

    return (
        <Main>
            <Sidebar />
            <Chat messages={messages} />
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    background-color: #ededed;
    margin: auto;
    height: 90vh;
    width: 90vw;
    box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`;

export default Home;