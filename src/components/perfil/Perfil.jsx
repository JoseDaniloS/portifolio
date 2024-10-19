import Iam from "./images/iam.jpg";
import Github from "./images/github.png";
import Linkedin from "./images/linkedin.png";

function Perfil() {
  return (
    <div id="about" className=" w-full flex items-center justify-around max-lg:flex-col max-md:space-y-10">
      <div>
        <img src={Iam} alt="" className="w-[20vw] rounded-full max-sm:w-[60vw]" />
      </div>
      <div className=" flex flex-col gap-5 ">
        <h1 className=" text-[40px] text-[#032D58] font-bold max-md:text-[35px]">
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
