import React from "react";
import carpng from ".././Assets/car.png";
import yellowCarPng from ".././Assets/banner-car.png";

const Hero = ({theme}) => {
  return (
    <div className="dark:bg-black dark:text-white duration-300  -z-20 ">
      <div className="container  min-h-[540px] max-w-[1080px] flex">
        <div
          className="grid place-items-center
              grid-cols-1 sm:grid-cols-2">
                  
          <div data-aos="zoom-in" data-aos-duartion="1500" className="order-1 sm:order-2">
                      <img src={theme==="dark" ? carpng : yellowCarPng} alt="" className="relative -z-10
             max-h-[600px] sm:scale-125 
              drop-shadow-[2px_20px_6px_rgba(0,0,0,0.5)]" />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
                      <p data-aos="fade-up" data-aos-delay="600"
                          className="text-primary text-2xl font-serif">Effortless</p>
                      <h1 data-aos="fade-up" data-aos-delay="600"
                          className="text-4xl lg:text-5xl font-semibold font-serif">
              Search Cars here!
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              et iusto rem, ab assumenda voluptas nulla velit placeat quis
              necessitatibus!
            </p>
            <button data-aos="fade-up" data-aos-delay="1000"
              className="btn bg-primary text-black px-6
                      py-2 rounded-md hover:bg-primary/80 duration-300 cursor pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
