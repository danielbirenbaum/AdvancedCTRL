import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { screens } from "./components/screens/ScreenInfo";

function App() {
    const [screen, setScreen] = useState(0);

    return (
        <>
            <div id="move-bar"></div>
            <NavBar setScreen={setScreen}></NavBar>

            <div id="screen">
                <h1>{screens[screen].title}</h1>
                {React.createElement(screens[screen].component, {})}
            </div>
        </>
    );
}

export default App;
