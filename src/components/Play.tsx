import { Link } from "react-router-dom";
import paper from "../assets/paper.png";
import rock from "../assets/rock.png";
import scissors from "../assets/scissors.png";

interface PlayProps {
  score: number;
}

export default function Play(props: PlayProps) {
  return (
    <>
      <div className="flex justify-center mt-24">
        <div className="px-10">
          <Link
            to={"/game"}
            state={[{ nome: "pedra" }, { score: props.score }]}
          >
            <img src={rock} alt="logo" className="h-40 hover:cursor-pointer" />
            <p className=" text-center text-gray-800 dark:text-gray-100 text-lg font-black ">
              Pedra
            </p>
          </Link>
        </div>
        <div className="px-10">
          <Link
            to={"/game"}
            state={[{ nome: "papel" }, { score: props.score }]}
          >
            <img src={paper} alt="logo" className="h-40 hover:cursor-pointer" />
            <p className=" text-center text-gray-800 dark:text-gray-100 text-lg font-black ">
              Papel
            </p>
          </Link>
        </div>
        <div className="px-10">
          <Link
            to={"/game"}
            state={[{ nome: "tesoura" }, { score: props.score }]}
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
