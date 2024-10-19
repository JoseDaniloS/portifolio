function Navbar({setNavigation, navigation}) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
    style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(3px)",
        position: "fixed",
        opacity: navigation ? 1 : 0,
        visibility: navigation ? "visible" : "hidden",
        top:"-100px",
        left:"0px",
        width: "100vw",
        height: "100vh",
        transition: "visibility 0.5s ease, opacity 0.5s ease"
      }}
      onClick={() => setNavigation(false)}
      
      className="flex flex-col items-center justify-center text-white font-bold text-[25px]"
    >
      <div className="flex flex-col items-center gap-10">
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
            setNavigation(false)
          }}
          href="/about"
          className="cursor-pointer"
        >
          Desenvolvedor
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("habilidades");
            setNavigation(false)
          }}
          href="/habilidades"
          className="cursor-pointer"
        >
          Habilidades
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projetos");
            setNavigation(false)
          }}
          href="/projetos"
          className="cursor-pointer"
        >
          Projetos
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contato");
            setNavigation(false)
          }}
          href="/contato"
          className="cursor-pointer"
        >
          Contato
        </a>
      </div>
    </div>
  );
}

export default Navbar