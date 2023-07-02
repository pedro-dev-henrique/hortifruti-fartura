import Image from "next/image";
import receita1 from "../../assets/receita1.jpg";
import receita2 from "../../assets/receita2.jpg";
import receita3 from "../../assets/receita3.jpg";
import divider from "../../assets/divider.png";

export default function Receipts() {
  const blogPosts = [
    {
      id: 1,
      title: "Vegetais Salteados com Tofu ao Molho de Leite de Coco",
      href: "#",
      description: "1h 30 minutos | 3 Pessoas",
      imageUrl: receita1,
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
    },
    {
      id: 2,
      title: "Torta Vegana de Chocolate com Mirtilos e Morangos",
      href: "#",
      description: "4 horas | 4 Pessoas",
      imageUrl: receita2,
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
    },
    {
      id: 3,
      title: "Torta de tomate e manjericão orgânico na massa de pinhão",
      href: "#",
      description: "1 hora | 4 Pessoas",
      imageUrl: receita3,
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
    },
  ];

  return (
    <div className="h-max bg-gray-100 my-10" id="receitas">
      <div className="flex items-center bg-gray-100">
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-32 lg:px-8 items-center">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none mt-8">
          <div className="flex justify-center ">
            <Image src={divider} alt="ofertas" />
          </div>

          <h2 className="text-3xl font-bold tracking-tigh sm:text-4xl text-primary text-center mt-4">
            Receitas
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
            Conheça nossas receitas e faça você mesmo em sua casa.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-green-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <span>{post.description}</span>
                <div className="-ml-4 flex items-center gap-x-4"></div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-primary text-white px-6 py-2 rounded transition-all duration-500 ease-in-out transform hover:scale-110 hover:bg-primary-dark hover:opacity-70 my-5"
          >
            Confira mais receitas  <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
