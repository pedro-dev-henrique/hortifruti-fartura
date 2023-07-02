import Image from "next/image";
import carne from "../../assets/carne.jpg";
import padaria from "../../assets/padaria.png";
import queijo from "../../assets/queijo.jpg";
import vinhos from "../../assets/vinhos.jpg";
import produtosImportados from "../../assets/produtos-importados.jpg";
import hortifruti from "../../assets/hortifruti.jpg";
import ofertas from "../../assets/ofertas.png";

export default function SectionGrid() {
  return (
    <div className="h-max sm:h-[40rem] lg:h-[70rem] my-20" id="produtos">
      <div className="flex justify-center items-center">
        <div className="my-4">
          <Image src={ofertas} alt="ofertas"/>
          <h1 className="text-4xl font-bold tracking-tight my-2 sm:text-4xl text-center text-primary my-4">
            Conheça nossa variedade de produtos
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-10 px-8">
      <div className="overflow-hidden rounded-3xl h-full transform transition-all duration-500 ease-in-out hover:scale-105">
          <Image
            src={carne}
            alt="Imagem 1"
            width={1920}
            height={1920}          
            className="object-cover rounded-3xl w-[40rem] h-full"
          />
        </div>
        <div className="transform transition-all duration-500 ease-in-out hover:scale-105 flex justify-center">
          <Image
            src={padaria}
            alt="Imagem 2"
            width={1920}
            height={1920}
            className="object-cover rounded-3xl w-[40rem] h-full"
          />
        </div>
        <div className="transform transition-all duration-500 ease-in-out hover:scale-105">
          <Image
            src={queijo}
            alt="Imagem 3"
            width={1920}
            height={1920}
            className="object-cover rounded-3xl w-[40rem] h-full"
          />
        </div>
        <div className="transform transition-all duration-500 ease-in-out hover:scale-105">
          <Image
            src={vinhos}
            alt="Imagem 4"
            width={1920}
            height={1920}
            className="object-cover rounded-3xl w-[40rem] h-full"
          />
        </div>
        <div className="transform transition-all duration-500 ease-in-out hover:scale-105">
          <Image
            src={produtosImportados}
            alt="Imagem 5"
            width={1920}
            height={1920}
            className="object-cover rounded-3xl w-[40rem] h-full"
          />
        </div>
        <div className="transform transition-all duration-500 ease-in-out hover:scale-105">
          <Image
            src={hortifruti}
            alt="Imagem 6"
            width={1920}
            height={1920}
            className="object-cover rounded-3xl w-[40rem] h-full"
          />
        </div>
      </div>
    </div>
  );
}
