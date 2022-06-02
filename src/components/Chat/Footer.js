import React from "react";
import {
    FooterContainer,
    Form,
    InsertEmoticonIcon,
    Input,
    Button,
    MicIcon,
} from "./StyledChatElements";


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
            <MicIcon />

        </FooterContainer>
    );
};

export default Footer;
