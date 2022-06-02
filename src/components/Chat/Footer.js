import React from 'react'
import { FooterContainer, Form, InsertEmoticonIcon, Input, Button } from './StyledChatElements'

const Footer = ({ input, setInput, sendMessage }) => {
    return (
        <FooterContainer>
            <InsertEmoticonIcon />
            <Form>
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text"
                />
                <Button onClick={sendMessage} type="submit">
                    Send a message
                </Button>
            </Form>
        </FooterContainer>
    );
};

export default Footer

/*
<div className="chat__footer">
    <InsertEmoticon />
    <form>
        <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
        />
        <button onClick={sendMessage} type="submit">
            Send a message
        </button>
    </form>
    <Mic />
</div>
*/ 