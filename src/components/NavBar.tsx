import NavBarOption from "./NavBarOption";
import NavBarScreenOption from "./NavBarScreenOption";
import { screens } from "../helpers/ScreenInfo";

interface NavBarProps {
    setScreenIndex: (x: number) => void; // Altera o estado do índice da tela atual
}

function NavBar(props: NavBarProps) {
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
                    {screens.map((s, idx) => {
                        return (
                            <NavBarScreenOption
                                key={idx}
                                iconPath={s.iconPath}
                                screenClickIndex={idx}
                                setScreenIndex={props.setScreenIndex}
                            >
                                {s.title}
                            </NavBarScreenOption>
                        );
                    })}

                    <NavBarOption
                        iconPath="assets/icons/power.svg"
                        onClick={() => window.ipcRenderer.send("quit-app")}
                    >
                        Sair
                    </NavBarOption>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
