import React from 'react'
import '../styles/Chat.css'

import { Avatar, IconButton } from "@material-ui/core";
import {
    AttachFile,
    MoreVert,
    SearchOutlined,
    InsertEmoticon,
    Mic,
} from "@material-ui/icons";

const Chat = () => {
    ;
    return (
            <div className="chat">
                <div className="chat__header">
                    <Avatar src="" alt="avatar" />
                    <div className="chat__headerInfo">
                        <h3>Room name</h3>
                        <p>Lase seen at...</p>
                    </div>
                    <div className="chat__headerRight">
                        <IconButton>
                            <SearchOutlined />
                        </IconButton>
                        <IconButton>
                            <AttachFile />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    </div>
                </div>
            </div>
        
       );
}

            export default Chat;