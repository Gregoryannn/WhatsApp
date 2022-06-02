import React from "react";
import { Avatar, IconButton } from "@material-ui/core";

import {
    Container,
    SearchOutlinedIcon,
    Searchbar,
    SearchContainer,
    SearchInput,
    ChatCardsContainer,
} from "./StyledSidebarElements";

import ChatCard from "./ChatCards";
import Header from "./Header";
import Search from "./Search";


const SideBar = () => {
    return (
        <Container>
           
            <Header />
            <Search />
        </Container>
    );
};
export default SideBar;