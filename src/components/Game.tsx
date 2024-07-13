import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
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
  const [drawGame, setDrawGame] = useState<boolean>(false);
  const [player2Selected, setPlayer2Selected] = useState<string | undefined>(
    sortearPlayer2Option()
  );

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
  function renderizarMensagemParaUsuario() {
    if (playerWin && playerWin != undefined) {
      return (
        <p className="mb-8 text-green-600 dark:text-gray-100 text-5xl font-bold mt-8">
          Voce Ganhou
        </p>
      );
    } else if (!playerWin && playerWin != undefined) {
      return (
        <p className="mb-8 text-red-700 dark:text-gray-100 text-5xl font-bold mt-8">
          Você Perdeu
        </p>
      );
    } else if (drawGame) {
      return (
        <p className="mb-8 text-blue-700 dark:text-gray-100 text-5xl font-bold mt-8">
          Empatou
        </p>
      );
    }
  }
  function verificarGanhador() {
    if (tipoSelecionado === "pedra" && player2Selected === "tesoura") {
      setPlayerWin(true);
      setDrawGame(false);
      setScoreState(scoreState + 1);
    } else if (tipoSelecionado === "pedra" && player2Selected === "papel") {
      setPlayerWin(false);
      setDrawGame(false);
      setScoreState(scoreState - 1);
    } else if (tipoSelecionado === "papel" && player2Selected === "pedra") {
      setPlayerWin(true);
      setDrawGame(false);
      setScoreState(scoreState + 1);
    } else if (tipoSelecionado === "papel" && player2Selected === "tesoura") {
      setPlayerWin(false);
      setDrawGame(false);
      setScoreState(scoreState - 1);
    } else if (tipoSelecionado === "tesoura" && player2Selected === "papel") {
      setPlayerWin(true);
      setDrawGame(false);
      setScoreState(scoreState + 1);
    } else if (tipoSelecionado === "tesoura" && player2Selected === "pedra") {
      setPlayerWin(false);
      setDrawGame(false);
      setScoreState(scoreState - 1);
    } else {
      setDrawGame(true);
      setPlayerWin(undefined!);
    }
  }
  useEffect(() => {
    verificarGanhador();
  }, [player2Selected]);
  return (
    <>
      <div className="bg-red-400 h-screen w-screen">
        <div className="">
          <Header score={scoreState} />
        </div>
        <p className=" text-center text-gray-800 dark:text-gray-100 text-3xl font-bold mt-8">
          Resultado:
        </p>
        <div className="flex justify-center">
          {renderizarMensagemParaUsuario()}
        </div>

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
              Robô Selecionou:
            </p>
            <img
              src={renderizarTipoDeFotoSelecionada(player2Selected!)}
              alt="logo"
              className="h-40 hover:cursor-pointer"
            />
            <p className=" ml-12 text-gray-800 dark:text-gray-100 text-lg font-black ">
              {player2Selected}
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
