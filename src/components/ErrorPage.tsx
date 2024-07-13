import { Link } from "react-router-dom";

export default function () {
  return (
    <section className="flex items-center h-screen w-screen p-16 bg-red-400 text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-100">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Desculpa, não conseguimos achar essa página.
          </p>
          <p className="mt-4 mb-8 text-gray-600">
            Mas não se preocupe, pode encontrar muitas outras coisas na nossa
            página inicial
          </p>
          <Link
            className="px-8 py-3 font-semibold rounded bg-gray-900 text-gray-50"
            to={"/"}
          >
            Voltar para o inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
