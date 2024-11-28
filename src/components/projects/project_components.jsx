import { useState } from "react";

function PComponents({ image, nome, link_projeto, link_github, tipo }) {
  const [hover, setHover] = useState(false);

  const HoverProjectPublic = () => {
    return (
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          visibility: !hover ? "hidden" : "visible",
        }}
        className="flex flex-col w-full justify-center animate-BaixoParaCima items-start p-5 font-bold gap-3 rounded-[5px]"
      >
        <p className="text-[20px] font-bold text-white">{nome}</p>
        <div className=" flex gap-5 text-[13px]">
          <a href={link_projeto} target="_blank">
            <button className="p-3 bg-[#032D58] rounded-[10px] text-[white]">
              LINK DO PROJETO
            </button>
          </a>
          <a href={link_github} target="_blank">
            <button className=" p-3 bg-[#032D58] rounded-[10px] text-[white]">
              LINK DO REPOSITORIO
            </button>
          </a>
        </div>
      </div>
    );
  };

  const HoverProjectPrivate = () => {
    return (
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          visibility: hover ? "visible" : "hidden",
        }}
        className="flex flex-col animate-BaixoParaCima w-full justify-center items-start p-5 font-bold gap-3 rounded-[5px]"
      >
        <p className="text-[20px] font-bold text-white">{nome}</p>
        <div className=" flex gap-5 text-[13px]">
          <a href={link_projeto} target="_blank">
            <button className="h-[40px] w-[140px] bg-[#032D58] rounded-[10px] text-[white]">
              LINK DO PROJETO
            </button>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[250px] w-[400px] hover:scale-110 transition-transform max-md:w-full overflow-hidden  flex flex-col items-center gap-1 rounded-[10px] justify-end"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {tipo ? <HoverProjectPublic /> : <HoverProjectPrivate />}
    </div>
  );
}

export default PComponents;
