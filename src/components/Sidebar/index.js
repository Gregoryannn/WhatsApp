import React from "react";

import { Avatar, IconButton } from "@material-ui/core";

import {
    Container,
    Header,
    HeaderRight,
    ChatIcon,
    DonutLargeIcon,
    MoreVertIcon,
    SearchOutlinedIcon,
    Searchbar,
    SearchContainer,
    SearchInput,
    ChatCardsContainer,
} from "./StyledSidebarElements";
import ChatCard from "../ChatCard";

const SideBar = () => {
    return (
        <Container>
            <Header>
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
            </Header>

            <Searchbar>
                <SearchContainer>
                    <SearchOutlinedIcon />
                    <SearchInput
                        placeholder="Search or start new chat"
                        type="text"
                    />
                </SearchContainer>
            </Searchbar>

            <ChatCardsContainer>
                <ChatCard />
            </ChatCardsContainer>
        </Container>
    );
};

export default SideBar; 