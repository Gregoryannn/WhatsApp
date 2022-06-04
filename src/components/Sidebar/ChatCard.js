import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import { ChatCard, ChatCardInfo, StyledLink } from "./StyledSidebarElements";

import { Avatar } from "@material-ui/core";

const ChatCards = ({ addNewChat, createChat, name, id }) => {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");

    useEffect(() => {
        if (id) {
            db.collection("rooms")
                .doc(id)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) => {
                    setMessages(snapshot.docs.map((doc) => doc.data()));
                });
        }
    }, [id]);


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 100));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if (roomName) {
            // data base stuff
        }
    }

    return !addNewChat ? (
        <StyledLink to={`/rooms/${id}`}>
            <ChatCard>
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                    alt="avatar"
                />
                <ChatCardInfo>
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </ChatCardInfo>
            </ChatCard>
        </StyledLink>
    ) : (
            <ChatCard onClick={createChat}>
            <h2>Add new Chat</h2>
        </ChatCard>
    );
};
export default ChatCards;