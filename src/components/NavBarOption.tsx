interface NavBarOptionProps {
  children: string;
  iconPath: string;
  onClick: () => void;
}

function NavBarOption(props: NavBarOptionProps) {
  return (
    <button className="navbar-option selected" onClick={props.onClick}>
      <img src={props.iconPath} />
      <span>{props.children}</span>
    </button>
  );
}

export default NavBarOption;
