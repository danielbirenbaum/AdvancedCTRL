import NavBarOption from "./NavBarOption";

interface NavBarScreenOptionProps {
    children?: string;
    iconPath: string;
    screenIndex: number; // Correspondente ao botão
    setScreenIndex: (x: number) => void; // Altera o estado do índice da tela atual
}

function NavBarScreenOption(props: NavBarScreenOptionProps) {
    return (
        <NavBarOption
            iconPath={props.iconPath}
            onClick={() => props.setScreenIndex(props.screenIndex)}
        >
            {props.children}
        </NavBarOption>
    );
}

export default NavBarScreenOption;
