import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export const Contato = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g0qzd9o",
        "template_l3aofxj",
        form.current,
        "CRPHNdzbj58kZQLig"
      )
      .then(
        () => {
          toast.success("Email enviado com sucesso!");
          form.current.reset();
        },
        error => {
          toast.error("Não foi possivel enviar o email!", error.message);
        }
      );
  };
  return (
    <div
      id="contato"
      className=" w-screen flex flex-col items-center bg-[#032D58] text-white text-[20px] gap-5 p-5"
    >
      <h1 className="text-[40px] font-bold max-md:text-[35px]">Contato</h1>
      <div className="flex flex-col space-y-5 w-[1169px] max-xl:w-[90vw]">
        <h1>Entre em Contato</h1>
        <span>
          Estou disponível para novos projetos e oportunidades. Sinta-se à
          vontade para entrar em contato comigo!
        </span>
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          method="post"
          className="flex flex-col space-y-4"
        >
          <TextField
            id="nome"
            name="user_name"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& .MuiInputBase-input": {
                  color: "white" // Cor do texto global
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white" // Cor da borda quando o campo está focado
                }
              },
              "& .MuiInputLabel-root": {
                color: "white", // Cor padrão do label
                "&.Mui-focused": {
                  color: "white" // Cor do label quando focado
                }
              }
            }}
            required
            className="rounded-md bg-[#FFFFFF80]"
            label="Seu Nome"
            variant="outlined"
          />
          <TextField
            id="email"
            name="user_email"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& .MuiInputBase-input": {
                  color: "white" // Cor do texto global
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white" // Cor da borda quando o campo está focado
                }
              },
              "& .MuiInputLabel-root": {
                color: "white", // Cor padrão do label
                "&.Mui-focused": {
                  color: "white" // Cor do label quando focado
                }
              }
            }}
            required
            className="rounded-md bg-[#FFFFFF80]"
            label="Seu Email"
            variant="outlined"
          />
          <TextField
            sx={{
              "& .MuiOutlinedInput-root": {
                "& .MuiInputBase-input": {
                  color: "white" // Cor do texto global
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white" // Cor da borda quando o campo está focado
                }
              },

              "& .MuiInputLabel-root": {
                color: "white", // Cor padrão do label
                "&.Mui-focused": {
                  color: "white" // Cor do label quando focado
                }
              }
            }}
            required
            className="rounded-md bg-[#FFFFFF80]"
            label="Seu Mensagem"
            name="message"
            id="mensagem"
            multiline
            minRows={5}
          />
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              backgroundColor: "white",
              color: "#032D58",
              fontWeight: "bold",
              width: "220px",
              height: "50px",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#f0f0f0" // Cor ao passar o mouse
              }
            }}
          >
            Enviar Mensagem
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contato;
