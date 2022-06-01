import { useEffect } from "react";
import Pusher from "pusher-js";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";


const App = () => {
    useEffect(() => {
        const pusher = new Pusher("163612a7213d95a362bb", {
            cluster: "mt1",
        });

        const channel = pusher.subscribe("messages");
        channel.bind("inserted", function (data) {
            alert(JSON.stringify(data));
        });
    }, []);

    return (
        <div className="app">
            <div className="app__body">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
};
export default App;