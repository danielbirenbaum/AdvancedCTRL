import NavBarOption from "./NavBarOption";

function NavBar() {
  //Botão de fechar via IPC
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
          <NavBarOption
            iconPath="assets/icons/home.svg"
            onClick={() => console.log("Página principal clicada com sucesso")}
          >
            Página Inicial
          </NavBarOption>
          <NavBarOption
            iconPath="assets/icons/settings.svg"
            onClick={() => null}
          >
            Configurações
          </NavBarOption>
          <NavBarOption iconPath="assets/icons/cpu.svg" onClick={() => null}>
            CPU
          </NavBarOption>
          <NavBarOption iconPath="assets/icons/gpu.svg" onClick={() => null}>
            GPU
          </NavBarOption>
          <NavBarOption iconPath="assets/icons/ram.svg" onClick={() => null}>
            RAM
          </NavBarOption>
          <NavBarOption iconPath="assets/icons/hdd.svg" onClick={() => null}>
            Disco Rígido
          </NavBarOption>
          <NavBarOption iconPath="assets/icons/fan.svg" onClick={() => null}>
            Ventoinha
          </NavBarOption>
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
