import React from "react";
import { FaUmbrellaBeach, FaMountain, FaCity } from "react-icons/fa";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-zinc-300 mb-40 text-center ">
        <h2 className="text-center py-6 mt-28 text-lg font-extrabold md:text-5xl animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[5px] hover:text-slate-500 text-slate-600">
          Role of Technology  <br />in Transforming Travel Experiences
        </h2>

        <div
          className="mt-8 h-60 sm:h-80 md:h-96 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url(/images/feature-bg.png)" }}
        ></div>

        <p className="text-center mb-4 mt-2 text-2xl text-[#212121] sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
         <i>Technology has revolutionized the way we travel.From planning trips through
          online <br />booking platforms to navigating new destinations with GPS and
          translation apps,artificial intelligence <br />and big data have enabled personalized
          recommendations, ensuring every journey is tailored to individual
          preferences. In short, <br />technology has transformed travel into a
          seamless and enriching experience, opening doors to endless
          possibilities for exploration.</i> 
        </p>
      </section>

      <section className="mb-10 bg-white">
        <h3 className="text-center text-4xl font-semibold md:text-4xl text-slate-600 hover:text-[#212121] mb-8">
          Explore Categories
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          <div className="flex flex-col items-center p-6 bg-[#E0E0E0] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl text-[#212121] mb-4">
              <FaUmbrellaBeach />
            </div>
            <h4 className="text-3xl font-semibold text-[#9E9E9E]">
              Beach Destinations
            </h4>
            <p className="text-sm text-[#212121] text-center mt-2">
              Discover the most beautiful beaches around the world.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-[#E0E0E0] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl text-[#212121] mb-4">
              <FaMountain />
            </div>
            <h4 className="text-3xl font-semibold text-[#9E9E9E]">
                Mountain Adventures
            </h4>
            <p className="text-sm text-[#212121] text-center mt-2">
              Explore breathtaking mountain trails and landscapes.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-[#E0E0E0] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl text-[#212121] mb-4">
              <FaCity />
            </div>
            <h4 className="text-3xl font-semibold text-[#9E9E9E]">
              City Tours
            </h4>
            <p className="text-sm text-[#212121] text-center mt-2">
              Experience the vibrant culture of world-famous cities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}