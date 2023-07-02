import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function Lojas() {
  return (
    <div className="my-10" id="lojas">
      <h2 className="text-3xl font-bold text-primary mb-4 text-center">
        Nossas Lojas
      </h2>
      <p className="text-lg mb-6 text-center">
        Veja qual de nossas unidades está mais próxima de você!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-16 sm:px-32">
        <div className="store">
          <ShoppingBagIcon width={20} className="mb-2 text-primary" />
          <h3 className="font-bold text-primary">LOJA CAMPINAS 1</h3>
          <p>Rua Camargo Paes, 7</p>
          <p>Jd. Guanabara - Campinas/SP</p>
          <p>19 3368.0554</p>
        </div>
        <div className="store">
          <ShoppingBagIcon width={20} className="mb-2  text-primary" />

          <h3 className="font-bold text-primary">LOJA CAMPINAS 3</h3>
          <p>Avenida Rotary, 40</p>
          <p>Estação Paineiras - Campinas/SP</p>
          <p>19 3251.1660 ou 3252.7380</p>
        </div>
        <div className="store">
          <ShoppingBagIcon width={20} className="mb-2  text-primary" />

          <h3 className="font-bold text-primary">LOJA SÃO PAULO 5</h3>
          <p>Rua Mario A. do Carmo, 545</p>
          <p>Jd. Avelino - São Paulo/SP</p>
          <p>11 2345.5879</p>
        </div>
        <div className="store">
          <ShoppingBagIcon width={20} className="mb-2  text-primary" />

          <h3 className="font-bold text-primary">LOJA CAMPINAS 7</h3>
          <p>Avenida João Prata Vieira, 164</p>
          <p>Pq. Vista Alegre - Campinas/SP</p>
          <p>19 3224.2962</p>
        </div>
        <div className="store">
          <ShoppingBagIcon width={20} className="mb-2  text-primary" />

          <h3 className="font-bold text-primary">LOJA CAMPINAS 2</h3>
          <p>Rua Jorge Figueiredo Correa, 1727</p>
          <p>Chácara Primavera - Campinas/SP</p>
          <p>19 3256.9489</p>
        </div>
        <div className="store">
          <ShoppingBagIcon width={20} className="mb-2  text-primary" />

          <h3 className="font-bold text-primary">LOJA CAMPINAS 4</h3>
          <p>Rua Dr. Manoel A. Ferreira, 30</p>
          <p>Jd. Paraíso - Campinas/SP</p>
          <p>19 3201.1976</p>
        </div>
        <div className="store">
          <ShoppingBagIcon width={20} className="mb-2  text-primary" />

          <h3 className="font-bold text-primary">LOJA VALINHOS 6</h3>
          <p>Avenida Invernada, 952</p>
          <p>Vila Faustina - Valinhos/SP</p>
          <p>19 3849.2555</p>
        </div>
        <div className="store">
          <ShoppingBagIcon width={20} className="mb-2  text-primary" />

          <h3 className="font-bold text-primary">LOJA VINHEDO 8</h3>
          <p>Local: Rua Júlio Pallaro, 165</p>
          <p>Santa Claudina - Vinhedo/SP</p>
          <p>(esquina com a Av. Independência)</p>
        </div>
      </div>
    </div>
  );
}
