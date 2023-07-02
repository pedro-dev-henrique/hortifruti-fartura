"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner from "../../assets/banner.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";

// Configurações do carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Banner() {
  return (
    <div className="bg-white sm:h-[50rem]" id="home">
    <Carousel
    swipeable={false}
    draggable={false}
    showDots={false}
    responsive={responsive}
    ssr={true}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    customTransition="transform 1000ms ease-in-out"
    transitionDuration={1000}
    containerClass="carousel-container"
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
  >
    <div className="w-screen h-[30rem] sm:h-[50rem] overflow-hidden" id="banner">
      <Image src={banner} alt="banner1" width={1920} height={1080} className="h-[30rem] sm:h-[45rem] object-cover"/>
    </div>
    <div className="w-screen h-[30rem] sm:h-[50rem] overflow-hidden">
      <Image src={banner2} alt="banner2" width={1920} height={1080} className="h-[30rem] sm:h-[45rem] object-cover"/>
    </div>
    <div className="w-screen h-[30rem] sm:h-[50rem] overflow-hidden">
      <Image src={banner3} alt="banner2" width={1920} height={1080} className="h-[30rem] sm:h-[45rem] object-cover"/>
    </div>
  </Carousel>
  </div>
  );
}
