import React from 'react'
import {
    Wrap,
    Container,
    Img,
    TextWrap,
    ButtonIcon,
} from "./StyledLoginElements";

const Login = () => {
    const signIn = () => {

    }

    return (
        <Wrap>
            <Container>
                <Img src="/whatsapp-logo.png" alt="whatsApp logo" />
                <TextWrap>
                    <h1>Sign in to WhatsApp</h1>
                </TextWrap>
                <ButtonIcon onClick={signIn}>
                    Sign In With Google
                </ButtonIcon>
            </Container>
        </Wrap>
    )
}

export default Login;