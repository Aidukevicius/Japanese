import React from 'react';
import HeroImage from '../assets/Hero.png'

function Hero() {
  return (
    <div>
      <section>
      <div className="container flex flex-col justify-center m-auto !xs:py-0 sm:py-12 lg:py-24 xl:py-24 2xl:py-0 lg:flex-row">
		    <div className="flex flex-col justify-center p-0 text-center rounded-sm mt-20 lg:mt-0 lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-Mono font-bold leading-none md:text-5xl lg:text-6xl">
            Unlock the Art of  <span className="text-[#C4DE39]">Japanese</span> Cuisine: Savor the Flavors, Master the Techniques!
            </h1>
            
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="pr-8 py-7 pl-1.5"
              >
                <a href="#_" class="relative inline-block text-lg group">
                <span class="font-Noto relative z-10 block px-5 py-3 overflow-hidden font-bold leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#C4DE39] group-hover:-rotate-180 ease"></span>
                <span class="relative">Get Started</span>
                </span>
                <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
                </a>
                
             
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 md:h-[25rem] lg:h-[30rem]  xl:h-[35rem]  2xl:h-[40rem]">
            <img
              src={HeroImage} 
              alt=""
              className="object-contain h-72 2xl:visible md:h-[25rem] lg:h-[30rem] xl:ml-10 xl:h-[35rem] 2xl:h-[40rem]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
