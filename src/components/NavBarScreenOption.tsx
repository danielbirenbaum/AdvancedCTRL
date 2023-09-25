import { useContext } from "react";
import NavBarOption from "./NavBarOption";
import { AppContext } from "../helpers/Context";

interface NavBarScreenOptionProps {
    children?: string;
    iconPath: string;
    screenClickIndex: number; // Correspondente ao botão
}

function NavBarScreenOption(props: NavBarScreenOptionProps) {
    const context = useContext(AppContext);

    return (
        <NavBarOption
            iconPath={props.iconPath}
            onClick={() => context?.setScreenIndex(props.screenClickIndex)}
            selected={context?.screenIndex == props.screenClickIndex}
        >
            {props.children}
        </NavBarOption>
    );
}

export default NavBarScreenOption;
