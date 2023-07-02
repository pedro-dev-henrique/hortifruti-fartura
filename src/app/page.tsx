"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lojas from "@/components/Lojas";
import Ofertas from "@/components/Ofertas";
import Receipts from "@/components/Receipts";
import Section from "@/components/Section";
import SectionGrid from "@/components/SectionGrid";
import { Dialog, Transition } from "@headlessui/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Fragment, useState } from "react";
import bannerOferta from "../assets/banner-oferta.png";
import whatsapp from "../assets/whatsapp.png";

const Banner = dynamic(() => import("@/components/Banner"));

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleWhats = () => {
    window.open(`https://api.whatsapp.com/send?phone=${selectedNumber}`);
  };
  const handleSelectNumber = (event: any) => {
    setSelectedNumber(event.target.value);
  };

  return (
    <div className="h-[300rem]">
      <Header />
      <Banner />
      <Section />
      <SectionGrid />
      <Receipts />
      <Lojas />
      <Ofertas />
      <Footer />

      <button
        className="fixed bottom-4 right-4 z-20 p-3 bg-green-500 rounded-full cursor-pointer shadow-lg"
        onClick={() => setIsModalOpen(true)}
      >
        <Image src={whatsapp} alt="whats-icon" width={40} height={40} />
      </button>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-[9999999999] overflow-y-auto"
          onClose={() => setIsModalOpen(false)}
        >
          <div className="h-max px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="relative">
                <Image
                  src={bannerOferta}
                  alt="bannerOferta"
                  width={1920}
                  height={1080}
                  className="w-full"
                />
              </div>
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900 mt-8"
              >
                Selecione com qual unidade gostaria de falar
              </Dialog.Title>

              <div className="mt-2">
                <select
                  className="w-full px-3 py-2 text-gray-700 border-2 border-gray-200 rounded-md focus:outline-none focus:border-gray-500"
                  onChange={handleSelectNumber}
                >
                  <option value="5519999485741">
                    Jd. Guanabara (Campinas)
                  </option>
                  <option value="551932569489">
                    Chácara Primavera (Campinas)
                  </option>
                  <option value="551999257199">Iguatemi (Campinas)</option>
                  <option value="5519996513362">Jd.Paraíso (Campinas)</option>
                  <option value="5511963599031">Jd. Avelino (São Paulo)</option>
                  <option value="5519998526471">Valinhos</option>
                  <option value="5519971576630">Jd. Vista Alegre</option>
                  <option value="551938760711">Vinhedo</option>
                </select>
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                  onClick={handleWhats}
                >
                  Enviar mensagem
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
