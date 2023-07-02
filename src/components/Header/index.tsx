"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import logo from "../../assets/fartura-logo.png";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const offset = window.scrollY;

      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };
  let navbarClasses = [
    "fixed",
    "top-0",
    "left-0",
    "w-full",
    "z-[99999]",
    "flex",
    "transition-all",
    "duration-800",
    "flex",
    "justify-between",
    "bg-transparent",
  ];

  let spanClasses = [
    "text-secondary",
    "text-xl",
    "cursor-pointer",
    "hover:text-green-900",
  ];

  let logoHeight: number = 180;

  if (scrolled) {
    navbarClasses.push(
      "!bg-primary",
      "h-20",
      "w-full",
      "bg-clip-padding",
      "backdrop-filter",
      "backdrop-blur-md",
      "g-opacity-50"
    );

    spanClasses.push(
      "!text-white",
      "!font-light",
      "cursor-pointer",
      "hover:text-green-900",
      "!text-base"
    );
    logoHeight = 80;
  }

  const scrollTo = (el: string) => {
    const Element = document.getElementById(el);

    Element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
  }, []);

  return (
    <header className={navbarClasses.join(" ")}>
      <div className="pl-4 pt-2">
        <a href="/">
          <div className="relative overflow-hidden sm:width-250 sm:height-150">
            <Image src={logo} alt="logo" width={logoHeight} />
          </div>
        </a>
      </div>

      <button
        className="text-white sm:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
        <span className="sr-only">Open sidebar</span>
      </button>
      <nav className={`${!isMobile ? "" : "hidden"} w-full flex items-center`}>
        <div className="px-4 py-2 flex justify-left round">
          <ul className="flex space-x-2 sm:space-x-4 gap-8">
            <li className="text-sm sm:text-base text-center flex items-center pl-5">
              <span
                onClick={() => scrollTo("home")}
                className={spanClasses.join(" ")}
              >
                Home
              </span>
            </li>
            <li className="text-sm sm:text-base text-center flex items-center">
              <span
                onClick={() => scrollTo("sobrenos")}
                className={spanClasses.join(" ")}
              >
                Sobre nós
              </span>
            </li>
            <li className="text-sm sm:text-base text-center flex items-center">
              <span
                onClick={() => scrollTo("produtos")}
                className={spanClasses.join(" ")}
              >
                Produtos
              </span>
            </li>
            <li className="text-sm sm:text-base text-center flex items-center">
              <span
                onClick={() => scrollTo("receitas")}
                className={spanClasses.join(" ")}
              >
                Receitas
              </span>
            </li>
            <li className="text-sm sm:text-base text-center flex items-center">
              <span
                onClick={() => scrollTo("lojas")}
                className={spanClasses.join(" ")}
              >
                Lojas
              </span>
            </li>
            <li className="text-sm sm:text-base text-center flex items-center">
              <span
                onClick={() => scrollTo("ofertas")}
                className={spanClasses.join(" ")}
              >
                Ofertas
              </span>
            </li>
            <li className="text-sm sm:text-base text-center flex items-center">
              <span
                onClick={() => window.location.href = '/contato'}
                className={spanClasses.join(" ")}
              >
                Contato
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-30 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-primary px-6 pb-4 z-[9999999999999999]">
                  <div className="flex shrink-0 items-center">
                    <Image
                      className="w-auto p-8"
                      src={logo}
                      alt="Your Company"
                      width={200}
                      height={150}
                      priority
                    />
                  </div>
                  <nav className="grid">
                    <ul className="grid-col-1">
                      <li className="text-sm sm:text-base text-center flex items-center">
                        <span
                          onClick={() => scrollTo("home")}
                          className={spanClasses.join(" ")}
                        >
                          Home
                        </span>
                      </li>
                      <li className="text-sm sm:text-base text-center flex items-center">
                        <span
                          onClick={() => scrollTo("sobrenos")}
                          className={spanClasses.join(" ")}
                        >
                          Sobre nós
                        </span>
                      </li>
                      <li className="text-sm sm:text-base text-center flex items-center">
                        <span
                          onClick={() => scrollTo("ofertas")}
                          className={spanClasses.join(" ")}
                        >
                          Ofertas
                        </span>
                      </li>
                      <li className="text-sm sm:text-base text-center flex items-center">
                        <span
                          onClick={() => scrollTo("receitas")}
                          className={spanClasses.join(" ")}
                        >
                          Receitas
                        </span>
                      </li>
                      <li className="text-sm sm:text-base text-center flex items-center">
                        <span
                          onClick={() => scrollTo("lojas")}
                          className={spanClasses.join(" ")}
                        >
                          Lojas
                        </span>
                      </li>
                      <li className="text-sm sm:text-base text-center flex items-center">
                        <span
                          onClick={() => scrollTo("ofertas")}
                          className={spanClasses.join(" ")}
                        >
                          Ofertas
                        </span>
                      </li>
                      <li className="text-sm sm:text-base text-center flex items-center">
                        <span
                          onClick={() => window.location.href = '/contato'}
                          className={spanClasses.join(" ")}
                        >
                          Contato
                        </span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  );
}
