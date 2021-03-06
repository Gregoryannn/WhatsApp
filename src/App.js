import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

// import Pusher from "pusher-js";
// import axios from "./axios";

import { useStateValue } from "./StateProvider";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";


const App = () => {
    // const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

// useEffect(() => {
    //     axios.get("/messages/sync").then((res) => {
    //         setMessages(res.data);
    //     });
    // }, []);


// useEffect(() => {
    //     const pusher = new Pusher("163612a7213d95a362bb", {
    //         cluster: "mt1",
    //     });


  //  const channel = pusher.subscribe("messages");
    //     channel.bind("inserted", function (newMessage) {
    //         setMessages([...messages, newMessage]);
    //     });

//     return () => {
    //         channel.unbind_all();
    //         channel.unsubscribe();
    //     };
    // }, [messages]);


// console.log(messages);


    return (
        <Main>
            {!user ? (
                <Login />
            ) : (
                <Router>
                    <Sidebar />
                    <Switch>
                        <Route path="/rooms/:roomId">
                                <Chat /*messages={messages}*/ />
                        </Route>
                        <Route path="/">
                                <Chat  /*messages={messages}*/ />
                        </Route>
                    </Switch>
                </Router>
            )}
        </Main>
    );
};
export default App;
const Main = styled.main`
    display: flex;
    background-color: #ededed;
    margin: 5vh auto;
    height: 90vh;
    width: 90vw;
    box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`;