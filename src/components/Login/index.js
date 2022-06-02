import React from 'react';
import { auth, provider } from '../../firebase'

import {
    Wrap,
    Container,
    Img,
    TextWrap,
    ButtonIcon,
} from "./StyledLoginElements";

const Login = () => {
    const signIn = () => {

        auth
            .signInWithPopup(provider)
            .then(res => console.log(res))
            .catch(err => alert(err.message))

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