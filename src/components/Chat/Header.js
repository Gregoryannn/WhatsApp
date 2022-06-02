import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { HeaderContainer, HeaderInfo, HeaderRight } from "./StyledChatElements";

import {
    AttachFile,
    MoreVert,
    SearchOutlined,
} from "@material-ui/icons";

const Header = () => {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 100));
    }, []);
    return (
        <HeaderContainer>
            <Avatar
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                alt="avatar"
            />            <HeaderInfo>
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