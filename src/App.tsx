import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
    const [screen, setScreen] = useState(0);

    return (
        <>
            <div id="move-bar"></div>
            <NavBar setScreen={setScreen}></NavBar>

            {screen}
        </>
    );
}

export default App;
