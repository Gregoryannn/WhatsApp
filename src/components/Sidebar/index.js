import React, { useEffect, useState } from "react";

import {
    Container,
    ChatCardsContainer,
} from "./StyledSidebarElements";

import ChatCard from "./ChatCard";
import Header from "./Header";
import Searchbar from "./Searchbar";


const SideBar = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <Container>
            <Header />
            <Searchbar />
            <ChatCardsContainer>
                <ChatCard addNewChat />
                <ChatCard />
                <ChatCard />
                <ChatCard />            </ChatCardsContainer>
        </Container>
    );
};
export default SideBar;