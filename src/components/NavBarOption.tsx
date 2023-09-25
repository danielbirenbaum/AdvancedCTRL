interface NavBarOptionProps {
    children?: string;
    iconPath: string;
    onClick: () => void;
    selected?: boolean;
}

function NavBarOption(props: NavBarOptionProps) {
    return (
        <button
            className={"navbar-option" + (props.selected ? " selected" : "")}
            onClick={props.onClick}
        >
            <img src={props.iconPath} />
            <span>{props.children}</span>
        </button>
    );
}

export default NavBarOption;
