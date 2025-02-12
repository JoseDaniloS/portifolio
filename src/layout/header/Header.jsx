import logo from "./images/Danilo1.png";
import Menu from "./images/Menu.png";

function Header({ setNavigation }) {
  return (
    <header className="w-full bg-[#032D58] p-4 flex items-center pl-[100px] max-md:pl-4 justify-between ">
      <div>
        <h1 className="text-[36px] font-extrabold text-white">
          {"</Danilo>"}
        </h1>
      </div>

      <div className="flex items-center gap-[100px]">
        <div className="flex gap-[50px] max-lg:hidden pr-[100px] text-white font-bold text-[24px]">
          <a
            onClick={e => {
              e.preventDefault();
              scrollToSection("about");
            }}
            href="/about"
            className="cursor-pointer"
          >
            Desenvolvedor
          </a>
          <a
            onClick={e => {
              e.preventDefault();
              scrollToSection("habilidades");
            }}
            href="/habilidades"
            className="cursor-pointer"
          >
            Habilidades
          </a>
          <a
            onClick={e => {
              e.preventDefault();
              scrollToSection("projetos");
            }}
            href="/projetos"
            className="cursor-pointer"
          >
            Projetos
          </a>
          <a
            onClick={e => {
              e.preventDefault();
              scrollToSection("contato");
            }}
            href="/contato"
            className="cursor-pointer"
          >
            Contato
          </a>
        </div>
        <img
          src={Menu}
          alt=""
          onClick={() => setNavigation(true)}
          className="cursor-pointer w-[50px] hidden max-lg:block"
        />
      </div>
    </header>
  );
}

export default Header;
