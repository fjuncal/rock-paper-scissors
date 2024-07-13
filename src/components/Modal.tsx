import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState<Boolean>();
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Regras
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Regras do Jogo</h3>
                  <button
                    className="p-1 ml-auto  border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-red-500 h-6 w-6 text-2xl block focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Os jogadores devem simultaneamente esticar a mão, na qual
                    cada um formou um símbolo (que significa pedra, papel ou
                    tesoura). Então, os jogadores comparam os símbolos para
                    decidir quem ganhou, da seguinte forma:
                  </p>
                  <ul className="list-disc list-inside my-4 text-blueGray-500 text-lg leading-relaxed">
                    <li>
                      Pedra ganha da tesoura (amassando-a ou quebrando-a).
                    </li>
                    <li>Tesoura ganha do papel (cortando-o).</li>
                    <li>Papel ganha da pedra (embrulhando-a).</li>
                  </ul>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    A pedra é simbolizada por um punho fechado; a tesoura, por
                    dois dedos esticados; e o papel, pela mão aberta. Caso dois
                    jogadores façam o mesmo gesto, ocorre um empate, e
                    geralmente se joga de novo até desempatar
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Este jogo possui uma única regra:
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed font-bold">
                    não é permitido mostrar pedra duas vezes seguidas.
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
