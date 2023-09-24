import { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import HomepageScreen from "./components/screens/HomepageScreen";

// TODO: Alterar componentes de HomepageScreen para as suas respectivas telas
export const screens = [
    ["home.svg", "Página Inicial", HomepageScreen],
    ["settings.svg", "Configurações", HomepageScreen],
    ["cpu.svg", "CPU", HomepageScreen],
    ["gpu.svg", "GPU", HomepageScreen],
    ["ram.svg", "RAM", HomepageScreen],
    ["hdd.svg", "Disco Rígido", HomepageScreen],
    ["fan.svg", "Ventoinha", HomepageScreen],
];

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
