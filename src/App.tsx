import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { screens } from "./components/screens/ScreenInfo";

function App() {
    const [screenIndex, setScreenIndex] = useState(0);

    return (
        <>
            <div id="move-bar"></div>
            <NavBar setScreenIndex={setScreenIndex}></NavBar>

            <div id="screen">
                <h1>{screens[screenIndex].title}</h1>
                {React.createElement(screens[screenIndex].component, {})}
            </div>
        </>
    );
}

export default App;
