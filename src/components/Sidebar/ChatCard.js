import React from 'react';
import {
    ChatCardWrap,
    ChatCardInfo,
} from "./StyledSidebarElements";

import { Avatar } from "@material-ui/core";

const ChatCards = () => {
    return (
        <ChatCardWrap>
            <Avatar src="" alt="avatar" />
            <ChatCardInfo>
                <h2>Room name</h2>
                <p>This is the last message</p>
            </ChatCardInfo>
        </ChatCardWrap>
    );
}

export default ChatCards;