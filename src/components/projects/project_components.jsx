import { useState } from "react";

function PComponents({ image, nome, link_projeto, link_github, tipo }) {
  const [hover, setHover] = useState(false);

  const HoverProjectPublic = () => {
    return (
      <div
        style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: hover ? 1 : 0,
            visibility: hover ? "visible" : "hidden",
            width: "100%",
            height: "130px",
            transition: "visibility 0.5s ease, opacity 0.5s ease"
        }}
        className="flex flex-col w-full justify-center items-start p-5 font-bold gap-3 rounded-[5px]"
      >
        <p className="text-[20px] font-bold text-white">{nome}</p>
        <div className=" flex gap-5 text-[13px]">
          <a href={link_projeto} target="_blank">
            <button className="h-[40px] w-[140px] bg-[#032D58] rounded-[10px] text-[white]">
              LINK DO PROJETO
            </button>
          </a>
          <a href={link_github} target="_blank" >
            <button className=" h-[40px] w-[180px] bg-[#032D58] rounded-[10px] text-[white]">
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
            opacity: hover ? 1 : 0,
            visibility: hover ? "visible" : "hidden",
            width: "100%",
            height: "130px",
            transition: "visibility 0.5s ease, opacity 0.5s ease"
        }}
        className="flex flex-col w-full justify-center items-start p-5 font-bold gap-3 rounded-[5px]"
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
      className="h-[250px] w-[410px]  flex flex-col items-center gap-1 rounded-[10px] justify-end"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {tipo ? <HoverProjectPublic /> : <HoverProjectPrivate />}
    </div>
  );
}

export default PComponents;
