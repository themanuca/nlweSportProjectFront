import "./styles/main.css";
import logoimg from "./assets/LogoNLW.svg";
import { MagnifyingGlassPlus } from "phosphor-react";
function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoimg} />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu {""}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          Duo {""}
        </span>
        está aqui
      </h1>

      <div className="pb-4 grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./src/assets/game1.png"></img>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>

            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a>

        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./src/assets/game2.png"></img>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>

            <span className="text-zinc-300 text-sm block ">6 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./src/assets/game3.png"></img>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              Counter Strike
            </strong>

            <span className="text-zinc-300 text-sm block ">20 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./src/assets/game5.png"></img>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex Legends</strong>

            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./src/assets/game6.png"></img>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>

            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="./src/assets/game7.png"></img>

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>

            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py6 flex justify-between items-center p-4">
          <div>
            <strong className="text-2xl text-white font-black block ">
              Não encotrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players !
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            Publicar Anúncio
            <MagnifyingGlassPlus size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
