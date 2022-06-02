import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvider";

import {
    Container,
    ChatContainer,
} from "./StyledSidebarElements";

import ChatCard from "./ChatCard";
import Header from "./Header";
import Searchbar from "./Searchbar";
import db from '../../firebase'


const SideBar = () => {
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();


    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const createChat = async () => {
        const roomName = prompt("Please enter name for chat room");

        if (roomName) {
            db.collection('rooms').add({ name: roomName })
        }
    };

    return (
        <Container>
            <Header user={user} />
            <Searchbar />
            <ChatContainer>
                <ChatCard addNewChat createChat={createChat} />
                {rooms.map((room) => (
                    <ChatCard key={room.id} id={room.id} name={room.data.name} />
                ))}
            </ChatContainer>
        </Container>
    );
};
export default SideBar;