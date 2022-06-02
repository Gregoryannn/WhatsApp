import { Avatar, IconButton } from "@material-ui/core";
import React from 'react'
import { HeaderContainer, HeaderInfo, HeaderRight } from "./StyledChatElements";

import {
    AttachFile,
    MoreVert,
    SearchOutlined,
} from "@material-ui/icons";

const Header = () => {
    return (
        <HeaderContainer>
            <Avatar src="" alt="avatar" />
            <HeaderInfo>
                <h3>Room name</h3>
                <p>Lase seen at...</p>
            </HeaderInfo>
            <HeaderRight>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </HeaderRight>
        </HeaderContainer>
    );
}

export default Header