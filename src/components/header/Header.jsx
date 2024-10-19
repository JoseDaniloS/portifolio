import logo from "./images/Danilo1.png";
import Menu from "./images/Menu.png";

function Header({setNavigation}) {

  return (
    <header className="w-full bg-[#032D58] p-4 flex items-center justify-between pl-[100px] pr-[40px]">
      <div className="flex items-center">
        <img src={logo} alt="" className="h-full w-[200px]" />
      </div>

      <div>
        <img
          src={Menu}
          alt=""
          onClick={() => setNavigation(true)}
          className="cursor-pointer w-[50px]"
        />
      </div>
    </header>
  );
}

export default Header;
