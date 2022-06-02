import React from "react";

import {
    Container,
    ChatCardsContainer,
} from "./StyledSidebarElements";

import ChatCard from "./ChatCard";
import Header from "./Header";
import Searchbar from "./Searchbar";


const SideBar = () => {
    return (
        <Container>
            <Header />
            <Searchbar />
            <ChatCardsContainer>
                <ChatCard />
            </ChatCardsContainer>
        </Container>
    );
};
export default SideBar;