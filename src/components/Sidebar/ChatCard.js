import React, { useEffect, useState } from 'react';

import {
    ChatCardWrap,
    ChatCardInfo,
} from "./StyledSidebarElements";

import { Avatar } from "@material-ui/core";

const ChatCards = ({ addNewChat }) => {
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
        <ChatCardWrap>
            <Avatar
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                alt="avatar"
            />            <ChatCardInfo>
                <h2>Room name</h2>
                <p>This is the last message</p>
            </ChatCardInfo>
        </ChatCardWrap>
    ) : (
        <ChatCardWrap onClick={createChat}>
            <h2>Add new Chat</h2>
        </ChatCardWrap>
    )
};
export default ChatCards;