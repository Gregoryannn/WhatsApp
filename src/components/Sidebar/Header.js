import { Avatar, IconButton } from "@material-ui/core";
import React from 'react'
import { ChatIcon, DonutLargeIcon, HeaderContainer, HeaderRight, MoreVertIcon } from './StyledSidebarElements'

const Header = () => {
    return (
        <HeaderContainer>
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
        </HeaderContainer>
    );
}

export default Header