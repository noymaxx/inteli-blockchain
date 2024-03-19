// App.tsx

import React, { useState, ChangeEvent, FormEvent } from "react";
import InputField from "./Components/inputField/InputField";
import Button from "./Components/button/Button";
import "./App.css";
import "./index.css";
// import logo from "/assets/logo.svg";
// import wpp from "../src/assets/wpp.svg";
// import github from "../src/assets/github.svg";
interface FormData {
    name: string;
    email: string;
    wallet: string;
}

const App: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        wallet: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
      <div className="flex min-h-screen w-full h-full items-center justify-center">
        <div className="flex flex-col items-center w-full align-center min-h-screen">
          <a
            href="https://inteliblockchain.co"
            target="_blank" // Abre o link em uma nova aba
            className="w-4/5 md:w-2/3 lg:w-1/2"
          >
            <img
              alt="InteliBlockchain"
              src="../src/assets/logo.svg"
              width={256}
              height={128}
              className="w-full mb-4"
            />
          </a>

          <div className="shadow-lg rounded-lg w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white text-white bg-opacity-20 px-4 py-8 backdrop-blur-lg">
            <p className="text-xl md:text-2xl mb-4">
              Receba sua Proof-Of-Attendance NFT
            </p>
            <p className="text-sm md:text-base text-gray-200">
              Para receber sua NFT você precisa ter participado do evento e ter
              uma carteira na rede Sepolia.
            </p>
            <p className="text-sm md:text-base text-gray-200 my-2">
              Ainda não tem uma carteira? Acesse o link e crie a sua já:{" "}
              <a
                target="_blank" // Abre o link em uma nova aba
                href={"https://metamask.io/download/"}
                className="text-blue-500 hover:underline"
              >
                Clique aqui.
              </a>
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col mt-8">
              <InputField
                label="Seu nome"
                type="text"
                placeholder="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                opcional="Esse nome será gravado no NFT para provar sua presença"
              />
              <InputField
                label="Email"
                type="email"
                placeholder="youremail@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                opcional="Email para receber novidades"
              />
              <InputField
                label="Wallet"
                type="text"
                placeholder="0x00...0000"
                name="wallet"
                value={formData.wallet}
                onChange={handleChange}
                opcional="Carteira para receber o NFT na rede Sepolia"
              />
              <Button text="Gerar NFT" />
            </form>
          </div>

          <div className="mt-8">
            <a
              href="https://github.com/InteliBlockchain/onboarding"
              target="_blank" // Abre o link em uma nova aba
            >
              <span className="text-sm text-gray-400 flex flex-row">
                Todo o código pode ser encontrado aqui:{" "}
                <img
                  alt="GitHub"
                  src="../src/assets/github.svg"
                  width={16}
                  height={16}
                />
              </span>
            </a>
          </div>
          <div className="mt-4">
            <a
              href="https://chat.whatsapp.com/EoP5wbGPujg8vpG9f6KNWz"
              target="_blank" // Abre o link em uma nova aba
            >
              <span className="text-sm text-gray-400 flex flex-row">
                Caso tenha alguma dúvida:{" "}
                <img
                  alt="WhatsApp"
                  src="../src/assets/wpp.svg"
                  width={16}
                  height={16}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    );
};

export default App;
