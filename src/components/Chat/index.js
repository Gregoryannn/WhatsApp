import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'

import axios from "../../axios";
import db from '../../firebase';

import { Container } from './StyledChatElements'
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Chat = ({ messages }) => {
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');

    useEffect(() => {
        if (roomId) {
            db.collection("rooms")
                .doc(roomId)
                .onSnapshot((snapshot) => {
                    setRoomName(snapshot.data().name);
                });
        }
    }, [roomId]);

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new", {
            name: "CCC",
            message: input,
            timestamp: "just now",
            received: false,
        });

        setInput("");
    };

    return (
        <Container>
            <Header roomName={roomName} />
            <Body messages={messages} />
            <Footer
                input={input}
                setInput={setInput}
                sendMessage={sendMessage}
            />

        </Container>
    );
};

export default Chat;