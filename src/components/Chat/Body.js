import React from 'react';

import {
    MessageContainer,
    MessageRceived,
    MessageSent,
    Name,
    Timestamp,
} from "./StyledChatElements";



const Body = ({ messages, userName }) => {

    return (
        <MessageContainer>
            {messages.map((message) =>
                message.name === userName ? (
                    <MessageSent key={message.id}>
                        <Name>{message.name}</Name>
                        {message.message}
                        <Timestamp>
                            {new Date(
                                message.timestamp?.toDate()
                            ).toUTCString()}
                        </Timestamp>
                    </MessageSent>
                ) : (
                        <MessageRceived key={message.id}>
                            <Name>{message.name}</Name>
                            {message.message}
                            <Timestamp>
                                {new Date(
                                    message.timestamp?.toDate()
                                ).toUTCString()}
                            </Timestamp>
                        </MessageRceived>
                )

            )}

        </MessageContainer>
    );
};

export default Body; 
