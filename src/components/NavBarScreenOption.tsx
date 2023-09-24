import NavBarOption from "./NavBarOption";

interface NavBarScreenOptionProps {
    children?: string;
    iconPath: string;
    screenIndex: number; // Correspondente ao botão
    setScreen: (x: number) => void; // Altera o estado da tela atual
}

function NavBarScreenOption(props: NavBarScreenOptionProps) {
    return (
        <NavBarOption
            iconPath={props.iconPath}
            onClick={() => props.setScreen(props.screenIndex)}
        >
            {props.children}
        </NavBarOption>
    );
}

export default NavBarScreenOption;
