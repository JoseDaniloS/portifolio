import PComponents from "./project_components";
import Imc from "./images/imc_calculator.png";
import StreetLight from "./images/street_light.png";
import SGB from "./images/SGB.png";

function Projetos() {
  return (
    <div id="projetos"
      className="flex flex-col items-center space-y-10 text-[#032D58] max-md:w-[90vw]"
    >
      <h1 className="text-[40px] font-bold max-md:text-[35px]">Projetos</h1>
      <div className="flex flex-col space-y-10 items-center w-full">
        <p className="font-bold text-[20px]">Código Público</p>
        <div className="flex gap-16 flex-wrap justify-center max-md:w-[90vw]">
          <PComponents
            image={Imc}
            link_github={"https://github.com/JoseDaniloS/imc-calculator"}
            link_projeto={"https://imc-calculator-cyan.vercel.app"}
            nome={"IMC Calculator"}
            tipo={true}
          />
          <PComponents
            image={StreetLight}
            link_github={"https://github.com/JoseDaniloS/street-light"}
            link_projeto={"https://street-light.vercel.app/"}
            nome={"Street Light"}
            tipo={true}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-10 items-center w-full">
        <p className="font-bold text-[20px]">
          Código Privado
        </p>
        <div className="flex gap-16 flex-wrap justify-center max-md:w-[90vw]">
          <PComponents
            image={SGB}
            link_projeto={
              "https://sgb-scholarship-management-system.vercel.app"
            }
            nome={"SGB - Sistema de Gestão de Bolsistas"}
            tipo={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Projetos;
