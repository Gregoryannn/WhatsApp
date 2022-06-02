import React, { useEffect, useState } from 'react';

import {
    ChatCardWrap,
    ChatCardInfo,
} from "./StyledSidebarElements";

import { Avatar } from "@material-ui/core";

const ChatCards = () => {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 100));
    }, [])

    return (
        <ChatCardWrap>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt="avatar" />
            <ChatCardInfo>
                <h2>Room name</h2>
                <p>This is the last message</p>
            </ChatCardInfo>
        </ChatCardWrap>
    );
}

export default ChatCards;