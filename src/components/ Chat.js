import React, { useState } from "react";
import "../styles/Chat.css";
import axios from "../axios";
import { Avatar, IconButton } from "@material-ui/core";

import {
    AttachFile,
    MoreVert,
    SearchOutlined,
    InsertEmoticon,
    Mic,
} from "@material-ui/icons";

    const Chat = ({ messages }) => {
        const [input, setInput] = useState("");
        const sendMessage = async (e) => {
            e.preventDefault();

            await axios.post("/messages/new", {
                name: "CCC",
                message: input,
                timestamp: "just now",
                received: false,
            });

            setInput("");
        };

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

                <div className="chat__body">
                    {messages.map((message) => (
                        <p
                            className={`chat__message ${!message.received && "chat__receiver"
                                }`}
                        >
                            <span className="chat__name">{message.name}</span>
                            {message.message}
                            <span className="chat__timestamp">
                                {message.timestamp}
                            </span>
                        </p>
                    ))}
                </div>

                <div className="chat__footer">
                    <InsertEmoticon />
                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message"
                            type="text"
                        />
                        <button onClick={sendMessage} type="submit">
                            Send a message
                        </button>
                    </form>
                    <Mic />
                </div>
            </div>
        );

};

export default Chat;