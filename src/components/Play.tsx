import scissors from "../assets/scissors.png";
import paper from "../assets/paper.png";
import rock from "../assets/rock.png";

export default function Play() {
  return (
    <>
      <div className="flex justify-center mt-24">
        <div className="px-10">
          <img
            src={rock}
            alt="logo"
            className="h-40 hover:cursor-pointer"
            onClick={() => console.log("pedra")}
          />
          <p className=" text-center text-gray-800 dark:text-gray-100 text-lg font-black ">
            Pedra
          </p>
        </div>
        <div className="px-10">
          <img
            src={paper}
            alt="logo"
            className="h-40 hover:cursor-pointer"
            onClick={() => console.log("papel")}
          />
          <p className=" text-center text-gray-800 dark:text-gray-100 text-lg font-black ">
            Papel
          </p>
        </div>
        <div className="px-10">
          <img
            src={scissors}
            alt="logo"
            className="h-40 hover:cursor-pointer"
            onClick={() => console.log("tesoura")}
          />
          <p className=" text-center text-gray-800 dark:text-gray-100 text-lg font-black ">
            Tesoura
          </p>
        </div>
      </div>
    </>
  );
}
