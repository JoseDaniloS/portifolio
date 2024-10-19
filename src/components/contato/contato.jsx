import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contato = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_g0qzd9o', 'template_l3aofxj', form.current, 'CRPHNdzbj58kZQLig')
        .then(
          () => {
            console.log('SUCCESS!');
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <div
      id="contato"
      className=" w-[100vw] flex flex-col items-center bg-[#032D58] text-white text-[20px] gap-5 p-5"
    >
      <h1 className="text-[40px] font-bold max-md:text-[35px]">Contato</h1>
      <div className="flex flex-col space-y-5 flex-wrap">
        <h1>Entre em Contato</h1>
        <span>
          Estou disponível para novos projetos e oportunidades. Sinta-se à
          vontade para entrar em contato comigo!
        </span>
        <form ref={form} onSubmit={sendEmail} action="" method="post" className="flex flex-col space-y-4">
          <input
            type="text"
            name="user_name"
            id="nome"
            placeholder="Seu Nome"
            className=" h-[50px] pl-[10px] rounded-md focus:outline-none text-[black]"
            required
          />
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Seu Email"
            className=" h-[50px] pl-[10px] rounded-md focus:outline-none text-[black]"
            required
          />
          <textarea
            name="message"
            id="mensagem"
            wrap="soft"
            spellCheck="true"
            placeholder="Sua Mensagem"
            className="h-[200px] p-[10px] rounded-md focus:outline-none text-[black] resize-none"
          ></textarea>
          <button className=" bg-[white] text-black font-semibold w-[220px] h-[50px] rounded-sm ">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contato;