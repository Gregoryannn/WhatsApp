import React from 'react';
import { useStateValue } from "../../StateProvider";

import {
    MessageContainer,
    MessageRceived,
    MessageSent,
    Name,
    Timestamp,
} from "./StyledChatElements";



const Body = ({ messages }) => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <MessageContainer>
            {messages.map(msg => (
                msg.name === user.displayName ? (
                    <MessageSent>
                        <Name>{msg.name}</Name>
                        {msg.message}
                        <Timestamp>{msg.timestamp}</Timestamp>
                    </MessageSent>
                ) : (
                    <MessageRceived>
                        <Name>{msg.name}</Name>
                        {msg.message}
                        <Timestamp>{msg.timestamp}</Timestamp>
                    </MessageRceived>
                )

            ))}
        </MessageContainer>
    );
}

export default Body; 
