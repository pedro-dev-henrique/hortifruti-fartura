import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Ofertas() {
  return (
    <div className="relative isolate overflow-hidden bg-white-100 opacity-100 py-16 sm:py-24 lg:py-32 h-[32rem] my-20 " id="ofertas">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Quer receber nossas ofertas?</h2>
            <p className="mt-4 text-lg leading-8 text-slate-950">
            Preencha o seu email abaixo e fique por dentro
            das ofertas da semana!
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Digite seu email..."
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Enviar
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-primary">Ofertas imperdíveis</dt>
              <dd className="mt-2 leading-7 text-slate-950">
                Receberá um conteúdo exclusivo de ofertas e promoções.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-primary">Sem span</dt>
              <dd className="mt-2 leading-7 text-slate-950">
                Garantimos que não enviaremos nenhum tipo de spam.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      </div>
    </div>
  )
}
