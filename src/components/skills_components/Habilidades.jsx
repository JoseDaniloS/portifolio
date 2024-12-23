import HabilidadesComponents from "./habilidades_components";
import Html5 from "./images/html.png";
import Css from "./images/css.png";
import Js from "./images/javascript.png";
import React from "./images/react.png";
import Tailwind from "./images/tailwind.png";

function Habilidades() {
  return (
    <section
      id="habilidades"
      className="flex flex-col items-center justify-center w-full h-screen space-y-10 "
    >
      <div>
        <h1 className="text-[40px] text-[#032D58] font-bold max-md:text-[35px]">
          Habilidades
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 ">
        <HabilidadesComponents nome={"HTML5"} image={Html5} />
        <HabilidadesComponents nome={"CSS3"} image={Css} />
        <HabilidadesComponents nome={"JavaScript"} image={Js} />
        <HabilidadesComponents nome={"React.js"} image={React} />
        <HabilidadesComponents nome={"Tailwind"} image={Tailwind} />
      </div>
    </section>
  );
}

export default Habilidades;
