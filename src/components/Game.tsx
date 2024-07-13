import Header from "./Header";

export default function Game() {
  return (
    <div className="bg-red-400 h-screen">
      <div className="">
        <Header />
      </div>
      <p className=" text-center text-gray-800 dark:text-gray-100 text-3xl font-bold mt-8">
        Resultado:
      </p>
    </div>
  );
}
