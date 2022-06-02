import React from 'react'
import { MessageContainer } from './StyledChatElements'
import Message from './Message'

const Body = ({ messages }) => {
    return (
        <MessageContainer>
            {messages.map((msg) => (
                <Message msg={msg} />
            ))}
        </MessageContainer>
    );
}

export default Body; 
