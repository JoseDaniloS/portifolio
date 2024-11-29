import HabilidadesComponents from "./habilidades_components";
import Html5 from "./images/html.png";
import Css from "./images/css.png";
import Js from "./images/javascript.png";
import React from "./images/react.png";
import Tailwind from "./images/tailwind.png";
import MongoDB from "./images/MongoDB.png";
import AWS from "./images/AWS.png";

function Habilidades() {
  return (
    <section
      id="habilidades"
      className="h-full max-lg:w-[90vw] overflow-hidden flex flex-col justify-center max-md:items-center space-y-10"
    >
      <div>
        <h1 className="text-[40px] text-[#032D58] text-center font-bold max-md:text-[35px]">
          Habilidades
        </h1>
      </div>

      {/* Hard Skills */}
      <div className="flex max-md:flex-col max-md:items-center max-md:w-[90vw] gap-20">
        <div className="max-w-[600px]">
          <p className="text-[20px] font-semibold">Hard Skills (Habilidades Técnicas):</p>
          <ul className="list-disc pl-5 mt-2">
            <li>HTML5: Estruturação de páginas web.</li>
            <li>CSS3: Design e estilização de layouts responsivos.</li>
            <li>JavaScript: Linguagem de programação essencial para interatividade no front-end.</li>
            <li>React.js: Biblioteca JavaScript para a criação de interfaces de usuário dinâmicas.</li>
            <li>Tailwind CSS: Framework de design focado em utilitários rápidos para estilização.</li>
            <li>MongoDB: Banco de dados NoSQL, ideal para projetos escaláveis e flexíveis.</li>
            <li>AWS Cloud: Habilidades na utilização da Amazon Web Services para hospedagem e computação em nuvem.</li>
            <li>API RESTful: Desenvolvimento de interfaces de comunicação entre sistemas.</li>
            <li>Git/GitHub: Controle de versão e colaboração em projetos de software.</li>
          </ul>
        </div>
        <div className="flex flex-wrap max-w-[500px] max-lg:max-w-[300px]  gap-10">
          <HabilidadesComponents nome={"HTML5"} image={Html5} />
          <HabilidadesComponents nome={"CSS3"} image={Css} />
          <HabilidadesComponents nome={"JavaScript"} image={Js} />
          <HabilidadesComponents nome={"React.js"} image={React} />
          <HabilidadesComponents nome={"Tailwind"} image={Tailwind} />
          <HabilidadesComponents nome={"MongoDB"} image={MongoDB} />
          <HabilidadesComponents nome={"AWS Cloud Computing"} image={AWS} />
        </div>
      </div>

      {/* Soft Skills */}
      <div className="flex max-w-[1169px] max-md:flex-col max-md:w-[90vw] gap-20">
        <div className="max-w-[600px]">
          <p className="text-[20px] font-semibold">Soft Skills (Habilidades Não Técnicas):</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Comunicação eficaz: Capacidade de transmitir ideias de forma clara e objetiva.</li>
            <li>Trabalho em equipe: Habilidade de colaborar com outros para atingir objetivos comuns.</li>
            <li>Resolução de problemas: Aptidão para encontrar soluções criativas e eficazes para desafios.</li>
            <li>Pensamento crítico: Capacidade de avaliar situações, analisar informações e tomar decisões bem fundamentadas.</li>
            <li>Gestão de tempo: Habilidade para organizar tarefas e cumprir prazos com eficiência.</li>
            <li>Empatia: Capacidade de entender e se conectar com as necessidades e sentimentos dos outros.</li>
            <li>Capacidade de aprendizado contínuo: Interesse em aprender novas tecnologias e crescer profissionalmente.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
