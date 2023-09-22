import NavBarOption from "./NavBarOption";

function NavBar() {
    return <div id="navbar">
        <div>
            <div id="navbar-title">
                <img src="assets/icons/logo.svg"/>
                
                <div>
                    <p id="navbar-title-heading"><b>AdvancedCTRL</b></p>
                    <p id="navbar-title-version">Version 2.1.0</p>
                </div>
            </div>

            <hr className="separator"/>

            <div id="navbar-options">
                <NavBarOption iconPath="assets/icons/home.svg">Página Inicial</NavBarOption>
                <NavBarOption iconPath="assets/icons/settings.svg" >Configurações</NavBarOption>
                <NavBarOption iconPath="assets/icons/cpu.svg" >CPU</NavBarOption>
                <NavBarOption iconPath="assets/icons/gpu.svg" >GPU</NavBarOption>
                <NavBarOption iconPath="assets/icons/ram.svg" >RAM</NavBarOption>
                <NavBarOption iconPath="assets/icons/hdd.svg" >Disco Rígido</NavBarOption>
                <NavBarOption iconPath="assets/icons/fan.svg" >Ventoinha</NavBarOption>
                <NavBarOption iconPath="assets/icons/power.svg" >Sair</NavBarOption>
            </div>
        </div>
    </div>
}

export default NavBar;
