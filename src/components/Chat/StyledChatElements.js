import styled from "styled-components";
import { InsertEmoticon, Mic } from "@material-ui/icons";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.65;
`;
export const HeaderContainer = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    border-bottom: 1px solid lightgray;
`;
export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 10vw;
`;

export const HeaderInfo = styled.div`
    flex: 1;
    padding-left: 20px;
    h3 {
        margin-bottom: 3px;
        font-weight: 500;
    }
    p {
        color: gray;
    }
`;

export const MessageRceived = styled.p`
    flex: 1;
    background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
    background-repeat: repeat;
    background-position: center;
    padding: 30px;
    overflow: scroll;
`;

export const MessageSent = styled(MessageRceived)`
    position: relative;
    font-size: 16px;
    padding: 10px;
    width: fit-content;
    border-radius: 10px;
    background-color: #ffffff;
    margin-bottom: 30px;
`;

export const Name = styled.span`
    position: absolute;
    top: -15px;
    font-weight: 800;
    font-size: xx-small;
`
export const Timestamp = styled.span`
    margin-left: 10px;
    font-size: xx-small;
`

export const MessageReceived = styled(MessageSent)`
    margin-left: auto;
    background-color: #dcf8c6;
`;
export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 62px;
    border-top: 1px solid lightgray;
`;

export const Form = styled.form`
    flex: 1;
    display: flex;
`
export const Input = styled.input`
    flex: 1;
    border-radius: 30px;
    padding: 10px;
    border: none;
    outline-width: 0;
`;

export const Button = styled.button`
    display: none;
`;

export const InsertEmoticonIcon = styled(InsertEmoticon)`
    padding: 10px;
    color: gray;
`;

export const MicIcon = styled(Mic)`
    padding: 10px;
    color: gray;
`;