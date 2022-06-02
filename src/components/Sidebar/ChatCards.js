import React from 'react';
import { ChatCard, ChatCardInfo, ChatCardsContainer } from "./StyledSidebarElements";

import { Avatar } from "@material-ui/core";

const ChatCards = () => {
    return (
        <ChatCardsContainer>
            <ChatCard>
                <Avatar src="" alt="avatar" />
                <ChatCardInfo>
                    <h2>Room name</h2>
                    <p>This is the last message</p>
                </ChatCardInfo>
            </ChatCard>
        </ChatCardsContainer>
    );
}

export default ChatCards;