import React from 'react';
import { ChatCardContainer, ChatCardInfo } from "./StyledSidebarElements";

import { Avatar } from "@material-ui/core";

const ChatCard = () => {
    return (
        <ChatCardContainer>
            <Avatar src="" alt="avatar" />
            <ChatCardInfo>
                <h2>Room name</h2>
                <p>This is the last message</p>
            </ChatCardInfo>
        </ChatCardContainer>
    );
}

export default ChatCard;