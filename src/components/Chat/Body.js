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

/*
<div className="chat__body">
    {messages.map((message) => (
        <p
            className={`chat__message ${
                !message.received && "chat__receiver"
            }`}
        >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
                {message.timestamp}
            </span>
        </p>
    ))}
</div>
*/ 