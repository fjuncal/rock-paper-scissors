import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import pedra from "../assets/rock.png";
import papel from "../assets/paper.png";
import tesoura from "../assets/scissors.png";

export default function Game() {
  const navigate = useNavigate();
  const location = useLocation();

  const { nome } = location.state;
  const score = location.state[1].score;
  const tipoSelecionado = location.state[0].nome;

  const [scoreState, setScoreState] = useState<number>(score);
  const [playerWin, setPlayerWin] = useState<boolean>(false);

  function sortearPlayer2Option() {
    const player2Options = ["pedra", "papel", "tesoura"];
    return player2Options[Math.floor(Math.random() * player2Options.length)];
  }

  function renderizarTipoDeFotoSelecionada(tipoSelecionado: string) {
    if (tipoSelecionado === "pedra") {
      return pedra;
    } else if (tipoSelecionado === "papel") {
      return papel;
    } else if (tipoSelecionado === "tesoura") {
      return tesoura;
    }
  }

  function verificarGanhador() {
    const player2Selecioando = sortearPlayer2Option();
    if (tipoSelecionado === "pedra" && player2Selecioando === "tesoura") {
      setPlayerWin(true);
      setScoreState((prev) => prev + 1);
    } else if (tipoSelecionado === "pedra" && player2Selecioando === "papel") {
      setPlayerWin(false);
      setScoreState((prev) => prev - 1);
    } else if (tipoSelecionado === "papel" && player2Selecioando === "pedra") {
      setPlayerWin(true);
      setScoreState((prev) => prev + 1);
    } else if (
      tipoSelecionado === "papel" &&
      player2Selecioando === "tesoura"
    ) {
      setPlayerWin(false);
      setScoreState((prev) => prev - 1);
    } else if (
      tipoSelecionado === "tesoura" &&
      player2Selecioando === "papel"
    ) {
      setPlayerWin(true);
      setScoreState((prev) => prev + 1);
    } else if (
      tipoSelecionado === "tesoura" &&
      player2Selecioando === "pedra"
    ) {
      setPlayerWin(false);
      setScoreState((prev) => prev - 1);
    } else {
      console.log("empatou");
    }
  }

  return (
    <>
      <div className="bg-red-400 h-screen w-screen">
        <div className="">
          <Header score={scoreState} />
        </div>
        <p className=" text-center text-gray-800 dark:text-gray-100 text-3xl font-bold mt-8">
          Resultado:
        </p>

        <div className="container mx-auto w-3/5 h-1/4 flex flex-col xl:flex-row items-start xl:items-center justify-between px-5 xl:px-10 ">
          <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-1/2">
            <p className=" mb-8 text-gray-800 dark:text-gray-100 text-xl font-semibold mt-8">
              Você Selecionou:
            </p>
            <img
              src={renderizarTipoDeFotoSelecionada(tipoSelecionado)}
              alt="logo"
              className="h-40 hover:cursor-pointer"
            />
            <p className=" ml-12 text-gray-800 dark:text-gray-100 text-lg font-black ">
              {tipoSelecionado}
            </p>
          </div>
          <div className="">
            <p className=" mb-8 text-gray-800 dark:text-gray-100 text-xl font-semibold mt-8">
              Você Selecionou:
            </p>
            <img
              src={renderizarTipoDeFotoSelecionada(tipoSelecionado)}
              alt="logo"
              className="h-40 hover:cursor-pointer"
            />
            <p className=" ml-12 text-gray-800 dark:text-gray-100 text-lg font-black ">
              {tipoSelecionado}
            </p>
          </div>
        </div>

        <div className="fixed left-0 bottom-0 w-full mb-8 text-center bg">
          <button
            onClick={() => navigate("/", { state: { scoreState } })}
            className="select-none rounded-lg bg-green-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Jogar novamente
          </button>
          <button
            onClick={() => setScoreState(0)}
            className="select-none rounded-lg ml-4 bg-red-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Zerar Pontuação
          </button>
        </div>
      </div>
    </>
  );
}
