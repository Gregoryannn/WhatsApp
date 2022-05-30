import React from "react";
import { Container, Header, HeaderIcons } from "./StyledSidebarElements";
import { Avatar } from "@material-ui/core";

const Sidebar = () => {
    return (
        <div>
            <Container>
                <Header>
                 
                    <Avatar src="" alt="avatar" />
                    <HeaderIcons></HeaderIcons>
                </Header>
            </Container>
        </div>

    );
};

export default Sidebar;