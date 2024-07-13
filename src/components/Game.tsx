import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

export default function Game() {
  const navigate = useNavigate();
  const location = useLocation();

  const { nome } = location.state;
  const score = location.state[1].score;
  const tipoSelecionado = location.state[0].nome;

  const [scoreState, setScoreState] = useState<number>(score);

  return (
    <>
      <div className="bg-red-400 h-screen">
        <div className="">
          <Header score={scoreState} />
        </div>
        <p className=" text-center text-gray-800 dark:text-gray-100 text-3xl font-bold mt-8">
          Resultado:
        </p>
      </div>
      <div className="fixed left-0 bottom-0 w-full mb-8 text-center">
        <button
          onClick={() => navigate("/", { state: { scoreState } })}
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Jogar novamente
        </button>
        <button
          onClick={() => setScoreState(scoreState + 1)}
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  text-white shadow-md shadow-gray-900/10 transition-all"
        >
          somar
        </button>
      </div>
    </>
  );
}
