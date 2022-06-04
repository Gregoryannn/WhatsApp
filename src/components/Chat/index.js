import React, { useState, useEffect } from "react";
import firebase from "firebase";

// import axios from "../../axios";
import db from "../../firebase";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";


import { Container } from "./StyledChatElements";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Chat = () => {
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 100));
    }, [roomName]);

    useEffect(() => {
        if (roomId) {
            db.collection("rooms")
                .doc(roomId)
                .onSnapshot((snapshot) => {
                    console.log(snapshot)
                    setRoomName(snapshot.data().name)
                });


            db.collection("rooms")
                .doc(roomId)
                .collection("messages")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
            );

        }
    }, [roomId]);


    const sendMessage = (e) => {
        e.preventDefault();

        db.collection("rooms").doc(roomId).collection("messages").add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });


        setInput("");
    };

    return (
        <Container>
            <Header roomName={roomName} seed={seed} messages={messages} />
            <Body messages={messages} userName={user.displayName} />

            <Footer
                input={input}
                setInput={setInput}
                sendMessage={sendMessage}
            />

        </Container>
    );
};

export default Chat;

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