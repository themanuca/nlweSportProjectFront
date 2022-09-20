import "./styles/main.css";
import logoimg from "./assets/LogoNLW.svg";

function App() {
  return (
    <div className="max-w-[1344] mx-auto flex flex-col items-center my-20">
      <img src={logoimg} />

      <h1 className="text-6xl text-white font-black m-20">Seu Duo está aqui</h1>
    </div>
  );
}

export default App;
