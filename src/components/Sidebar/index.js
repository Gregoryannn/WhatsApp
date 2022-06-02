import React from "react";

import {
    Container,
    ChatCardsContainer,
} from "./StyledSidebarElements";

import ChatCard from "./ChatCard";
import Header from "./Header";
import Search from "./Search";


const SideBar = () => {
    return (
        <Container>
           
            <Header />
            <Search />
            <ChatCardsContainer>

            </ChatCardsContainer>
        </Container>
    );
};
export default SideBar;