import NavBarOption from "./NavBarOption";
import NavBarScreenOption from "./NavBarScreenOption";

interface NavBarProps {
    setScreen: (x: number) => void; // Altera o estado da tela atual
}

function NavBar(props: NavBarProps) {
    function closeApp() {
        window.ipcRenderer.send("quit-app");
    }

    return (
        <div id="navbar">
            <div>
                <div id="navbar-title">
                    <img src="assets/icons/logo.svg" />

                    <div>
                        <p id="navbar-title-heading">
                            <b>AdvancedCTRL</b>
                        </p>
                        <p id="navbar-title-version">Version 2.1.0</p>
                    </div>
                </div>

                <hr className="separator" />

                <div id="navbar-options">
                    <NavBarScreenOption
                        iconPath="assets/icons/home.svg"
                        screenIndex={0}
                        setScreen={props.setScreen}
                    >
                        Página Inicial
                    </NavBarScreenOption>
                    <NavBarScreenOption
                        iconPath="assets/icons/settings.svg"
                        screenIndex={1}
                        setScreen={props.setScreen}
                    >
                        Configurações
                    </NavBarScreenOption>
                    <NavBarScreenOption
                        iconPath="assets/icons/cpu.svg"
                        screenIndex={2}
                        setScreen={props.setScreen}
                    >
                        CPU
                    </NavBarScreenOption>
                    <NavBarScreenOption
                        iconPath="assets/icons/gpu.svg"
                        screenIndex={3}
                        setScreen={props.setScreen}
                    >
                        GPU
                    </NavBarScreenOption>
                    <NavBarScreenOption
                        iconPath="assets/icons/ram.svg"
                        screenIndex={4}
                        setScreen={props.setScreen}
                    >
                        RAM
                    </NavBarScreenOption>
                    <NavBarScreenOption
                        iconPath="assets/icons/hdd.svg"
                        screenIndex={5}
                        setScreen={props.setScreen}
                    >
                        Disco Rígido
                    </NavBarScreenOption>
                    <NavBarScreenOption
                        iconPath="assets/icons/fan.svg"
                        screenIndex={6}
                        setScreen={props.setScreen}
                    >
                        Ventoinha
                    </NavBarScreenOption>
                    <NavBarOption
                        iconPath="assets/icons/power.svg"
                        onClick={() => closeApp()}
                    >
                        Sair
                    </NavBarOption>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
