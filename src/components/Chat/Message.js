import React from 'react';
import {
    MessageSent,
    MessageReceived,
    Name,
    Timestamp,
} from "./StyledChatElements";

const Message = ({ msg }) => {
    const { name, message, timestamp, received } = msg;

    if (!received) {
        return (
            <MessageSent>
                <Name>{name}</Name>
                {message}
                <Timestamp>{timestamp}</Timestamp>
            </MessageSent>
        );
    } else {
        return (
            <MessageReceived>
                <Name>{name}</Name>
                {message}
                <Timestamp>{timestamp}</Timestamp>
            </MessageReceived>
        );
    }
}

export default Message;