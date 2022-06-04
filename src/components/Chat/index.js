import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase";

// import axios from "../../axios";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";


import { Container } from "./StyledChatElements";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Chat = (/*{ messages }*/) => {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        if (roomId) {
            db.collection("rooms")
                .doc(roomId)
                .onSnapshot((snapshot) => {
                    setRoomName(snapshot.data().name);
                });

            db.collection("rooms")
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map(doc => doc.data()))
            );

        }
    }, [roomId]);

    /*const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post("/messages/new", {
            name: "CCC",
            message: input,
            timestamp: "just now",
            received: false,
        });

 setInput("");
    };*/

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection("rooms")
            .doc(roomId).collection("messages")
            .add({
                message: input,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })


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