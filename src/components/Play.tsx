import scissors from "../assets/scissors.png";
import paper from "../assets/paper.png";
import rock from "../assets/rock.png";
import { Link } from "react-router-dom";

export default function Play() {
  return (
    <>
      <div className="flex justify-center mt-24">
        <div className="px-10">
          <Link to={"/game"}>
            <img
              src={rock}
              alt="logo"
              className="h-40 hover:cursor-pointer"
              onClick={() => console.log("pedra")}
            />
            <p className=" text-center text-gray-800 dark:text-gray-100 text-lg font-black ">
              Pedra
            </p>
          </Link>
        </div>
        <div className="px-10">
          <Link to={"/game"}>
            <img
              src={paper}
              alt="logo"
              className="h-40 hover:cursor-pointer"
              onClick={() => console.log("papel")}
            />
            <p className=" text-center text-gray-800 dark:text-gray-100 text-lg font-black ">
              Papel
            </p>
          </Link>
        </div>
        <div className="px-10">
          <Link to={"/game"}>
            <img
              src={scissors}
              alt="logo"
              className="h-40 hover:cursor-pointer"
              onClick={() => console.log("tesoura")}
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
