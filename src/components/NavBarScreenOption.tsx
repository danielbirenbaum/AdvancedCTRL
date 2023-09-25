import NavBarOption from "./NavBarOption";

interface NavBarScreenOptionProps {
    children?: string;
    iconPath: string;
    screenClickIndex: number; // Correspondente ao botão
    setScreenIndex: (x: number) => void; // Altera o estado do índice da tela atual
}

function NavBarScreenOption(props: NavBarScreenOptionProps) {
    return (
        <NavBarOption
            iconPath={props.iconPath}
            onClick={() => props.setScreenIndex(props.screenClickIndex)}
        >
            {props.children}
        </NavBarOption>
    );
}

export default NavBarScreenOption;
