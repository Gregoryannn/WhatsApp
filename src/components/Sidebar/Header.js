import { Avatar, IconButton } from "@material-ui/core";
import React from 'react'
import { ChatIcon, DonutLargeIcon, HeaderWrap, HeaderRight, MoreVertIcon } from './StyledSidebarElements'

const Header = () => {
    return (
        <HeaderWrap>
            <Avatar src="" alt="avatar" />
            <HeaderRight>
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </HeaderRight>
        </HeaderWrap>
    );
}

export default Header