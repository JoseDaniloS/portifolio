import Iam from "./images/iam.png";
import Github from "./images/github.png";
import Linkedin from "./images/linkedin.png";

function Perfil() {
  return (
    <div id="about" className=" w-[90vw] flex items-center justify-evenly max-lg:flex-col max-md:space-y-10">
      <div>
        <img src={Iam} alt="" className="w-[25vw] rounded-full max-md:w-[90vw]" />
      </div>
      <div className="flex flex-col gap-5 max-md:items-center">
        <h1 className=" text-[40px] text-[#032D58] font-bold max-md:text-[32px] text-center">
          Olá, me chamo José Danilo
        </h1>
        
        <div className="flex gap-5">
          <a href="https://github.com/JoseDaniloS" target="_blank">
            <img src={Github} alt="" className="w-[50px] cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/josedanilos/" target="_blank">
            <img src={Linkedin} alt="" className="w-[50px] cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
