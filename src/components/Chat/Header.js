import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { HeaderContainer, HeaderInfo, HeaderRight } from "./StyledChatElements";

import {
    AttachFile,
    MoreVert,
    SearchOutlined,
} from "@material-ui/icons";

const Header = ({ roomName, seed, messages }) => {


    return (
        <HeaderContainer>
            <Avatar
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                alt="avatar"
            />            <HeaderInfo>
                <h3>{roomName}</h3>
                <p>
                    Lase seen {""} {new Date(messages[messages.length - 1]?.
                        timestamp?.toDate()).toUTCString()}
                </p>
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

};

export default Header