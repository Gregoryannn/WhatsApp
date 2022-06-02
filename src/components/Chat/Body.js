import React from 'react'
import { BodyContainer } from './StyledChatElements'
import Message from './Message'

const Body = ({ messages }) => {
    return (
        <BodyContainer>
            {messages.map((msg) => (
                <Message msg={msg} />
            ))}
        </BodyContainer>
    );
}

export default Body; 
