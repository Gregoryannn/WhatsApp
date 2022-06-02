import React, { useState } from "react";

import axios from "../../axios";

import { Container } from './StyledChatElements'
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Chat = ({ messages }) => {
    const [input, setInput] = useState("");

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
            <Header />
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