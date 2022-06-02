import React from 'react';
import {
    MessageRceived,
    MessageSent,
    Name,
    Timestamp,
} from "./StyledChatElements";

const Message = ({ msg }) => {
    const { name, message, timestamp, received } = msg;
        // console.log(msg)

    if (received) {
        return (
            <MessageRceived >
                <Name>{name}</Name>
                {message}
                <Timestamp>{timestamp}</Timestamp>
            </MessageRceived>
        );
        return (
            <MessageSent >
                <Name>{name}</Name>
                {message}
                <Timestamp>{timestamp}</Timestamp>
            </MessageSent>
        );
    }
}

export default Message;