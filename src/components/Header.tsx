import logo from "../assets/logo.png";

interface HeaderProps {
  score: number;
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <div className="flex justify-center py-4 ">
        <img src={logo} alt="logo" className="h-40" />
      </div>
      <div className="container mx-auto w-5/6 sm:w-2/3 h-full ">
        <div
          className="w-full bg-gray-100
       dark:bg-gray-800 py-5 flex flex-col xl:flex-row items-start xl:items-center justify-between px-5 xl:px-10 shadow rounded-2xl"
        >
          <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-1/2">
            <p className="  text-gray-800 dark:text-gray-100 text-lg font-bold">
              Pedra
            </p>
            <p className="  text-gray-800 dark:text-gray-100 text-lg font-bold">
              Papel
            </p>
            <p className="  text-gray-800 dark:text-gray-100 text-lg font-bold">
              Tesoura
            </p>
          </div>
          <div className="">
            <p className="text-gray-800 dark:text-gray-100 text-lg font-bold">
              Score
            </p>
            <p className="ml-4 font-normal text-lg text-black dark:text-gray-100 mt-1">
              {props.score}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
