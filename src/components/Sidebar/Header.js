import React from 'react'
import { Avatar } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert } from "@material-ui/icons";
import {
    HeaderWrap,
    HeaderRight,
    ButtonWrap,
} from "./StyledSidebarElements";
const Header = () => {
    return (
        <HeaderWrap>
            <Avatar src="" alt="avatar" />
            <HeaderRight>
                <ButtonWrap>
                    <DonutLarge />
                </ButtonWrap>
                <ButtonWrap>
                    <Chat />
                </ButtonWrap>
                <ButtonWrap>
                    <MoreVert />
                </ButtonWrap>
            </HeaderRight>
        </HeaderWrap>
    );
}

export default Header