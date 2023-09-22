interface NavBarOptionProps {
    children: string,
    iconPath: string, 
    //faltando função relacionada a mudanca de "página"
}

function NavBarOption(props: NavBarOptionProps ) {
    return <button className="navbar-option selected">
        <img src={props.iconPath}/>
        <span>{props.children}</span>
    </button>
}

export default NavBarOption;