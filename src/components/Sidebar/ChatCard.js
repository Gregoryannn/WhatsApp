import React, { useEffect, useState } from 'react';

import {
    ChatCard,
    ChatCardInfo,
} from "./StyledSidebarElements";

import { Avatar } from "@material-ui/core";

const ChatCards = ({ addNewChat, createChat, name }) => {
    const [seed, setSeed] = useState("");

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
        <ChatCard>
            <Avatar
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                alt="avatar"
            />            <ChatCardInfo>
                <h2>{name}</h2>
                <p>This is the last message</p>
            </ChatCardInfo>
        </ChatCard>
    ) : (
            <ChatCard onClick={createChat}>
            <h2>Add new Chat</h2>
        </ChatCard>
    );
};
export default ChatCards;