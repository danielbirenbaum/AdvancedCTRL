import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { screens } from "./helpers/ScreenInfo";
import { AppContext } from "./helpers/Context";

function App() {
    const [screenIndex, setScreenIndex] = useState(0);

    return (
        <AppContext.Provider value={{ screenIndex, setScreenIndex }}>
            <div id="move-bar"></div>
            <NavBar></NavBar>

            <div id="screen">
                <h1>{screens[screenIndex].title}</h1>
                { screens[screenIndex].subtitle ? <p className="subtitle">{screens[screenIndex].subtitle}</p> : null }
                

                {React.createElement(screens[screenIndex].component, {})}
            </div>
        </AppContext.Provider>
    );
}

export default App;
