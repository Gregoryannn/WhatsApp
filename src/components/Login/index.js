import React from "react";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

import {
    Wrap,
    Container,
    Img,
    TextWrap,
    ButtonIcon,
} from "./StyledLoginElements";

const Login = () => {
    const [{ }, dispatch] = useStateValue();

    const signIn = () => {

        auth.signInWithPopup(provider)
            .then((res) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.user,
                });
            })
            .catch((err) => alert(err.message));
    };

    return (
        <Wrap>
            <Container>
                <Img src="/whatsapp-logo.png" alt="whatsApp logo" />
                <TextWrap>
                    <h1>Sign in to WhatsApp</h1>
                </TextWrap>
                <ButtonIcon onClick={signIn}>Sign In With Google</ButtonIcon>

            </Container>
        </Wrap>
    );
};

export default Login;