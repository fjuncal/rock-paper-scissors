import { Link } from "react-router-dom";
import paper from "../assets/paper.png";
import rock from "../assets/rock.png";
import scissors from "../assets/scissors.png";
import { useState } from "react";

interface PlayProps {
  score: number;
}

export default function Play(props: PlayProps) {
  const [scoreState, setScoreState] = useState(props.score);
  console.log("playyyyyy component", scoreState);

  return (
    <>
      <div className="flex justify-center mt-24">
        <div className="px-10">
          <Link to={"/game"} state={[{ nome: "pedra" }, { score: scoreState }]}>
            <img src={rock} alt="logo" className="h-40 hover:cursor-pointer" />
            <p className=" text-center text-gray-800 dark:text-gray-100 text-lg font-black ">
              Pedra
            </p>
          </Link>
        </div>
        <div className="px-10">
          <Link to={"/game"} state={[{ nome: "papel" }, { score: scoreState }]}>
            <img src={paper} alt="logo" className="h-40 hover:cursor-pointer" />
            <p className=" text-center text-gray-800 dark:text-gray-100 text-lg font-black ">
              Papel
            </p>
          </Link>
        </div>
        <div className="px-10">
          <Link
            to={"/game"}
            state={[{ nome: "tesoura" }, { score: scoreState }]}
          >
            <img
              src={scissors}
              alt="logo"
              className="h-40 hover:cursor-pointer"
            />
            <p className=" text-center text-gray-800 dark:text-gray-100 text-lg font-black ">
              Tesoura
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
