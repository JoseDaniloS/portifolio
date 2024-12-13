//COMPONENTS DE BIBLIOTECAS EXTERNAS
import { useState } from "react";
import { ToastContainer } from "react-toastify";

//COMPONENTS REUTILIZAVEIS
import Header from "./components/header/Header";
import AboutMe from "./components/about_me/AboutMe";
import Habilidades from "./components/skills_components/Habilidades";
import Perfil from "./components/perfil/Perfil";
import Projetos from "./components/projects/projects";
import Contato from "./components/contato/contato";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

function App() {
  const [navigation, setNavigation] = useState(false);

  return (
    <>
      <main className="h-screen w-full bg-[#eee] space-y-[100px] overflow-x-hidden flex flex-col items-center">
        <Header setNavigation={setNavigation} />
        <Navbar setNavigation={setNavigation} navigation={navigation} />
        <Perfil />
        <AboutMe />
        <Habilidades />
        <Projetos />
        <div>
          <Contato />
          <Footer />
        </div>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
