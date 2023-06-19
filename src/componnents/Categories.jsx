import { Carousel,IconButton,} from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import CategoryRamen from '../assets/CategoryRamen.png'
import CategoryBento from '../assets/CategoryBento.png'
import CategorySushi from '../assets/CategorySushi.png'

export default function Example() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-black w-8" : "bg-black/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 -translate-y-2/4 left-10  xl:left-42 "
        >
          <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" color="black" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="black"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 -translate-y-2/4 right-10 xl:right-42 "
        >
          <ArrowRightIcon strokeWidth={2} className="w-6 h-6" color="black" />
        </IconButton>
      )}
      
    >
      <section className="">
      <div className="container flex flex-col items-center justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
        <div className="flex m-auto flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-Mono font-bold leading-none sm:text-6xl">
              Ramen
            </h1>
            <p className="mt-6 mb-8 text-lg font-Noto font-black sm:mb-12">
            Flavorful broth, chewy noodles, and tasty toppings create a comforting and beloved dish enjoyed worldwide.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
                rel="Explore Recipes"
                href="#"
                className=""
              >
                <a href="#_" class="relative inline-block text-lg group">
                <span class="font-Noto relative z-10 block px-5 py-3 overflow-hidden font-bold leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#C4DE39] group-hover:-rotate-180 ease"></span>
                <span class="relative">Explore Recipes</span>
                </span>
                <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
                </a>
             
            </div>
          </div>
          <div className="m-auto flex items-center justify-center p-6 mt-8  lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={CategoryRamen}
              alt="Ramen"
              className="object-contain m-auto h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      <section className="">
      <div className="container flex flex-col items-center justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
        <div className="flex m-auto flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-Mono font-bold leading-none sm:text-6xl">
              Bento Box
            </h1>
            <p className="mt-6 mb-8 text-lg font-Noto font-black sm:mb-12">
            A convenient and balanced meal, featuring a variety of flavorful dishes beautifully arranged in a compact container.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
                rel="Explore Recipes"
                href="#"
                className=""
              >
                <a href="#_" class="relative inline-block text-lg group">
                <span class="font-Noto relative z-10 block px-5 py-3 overflow-hidden font-bold leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#C4DE39] group-hover:-rotate-180 ease"></span>
                <span class="relative">Explore Recipes</span>
                </span>
                <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
                </a>
             
            </div>
          </div>
          <div className="m-auto flex items-center justify-center p-6 mt-8  lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={CategoryBento}
              alt="Bento Box"
              className="object-contain m-auto h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      <section className="">
      <div className="container flex flex-col items-center justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
        <div className="flex m-auto flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-Mono font-bold leading-none sm:text-6xl">
              Sushi
            </h1>
            <p className="mt-6 mb-8 text-lg font-Noto font-black sm:mb-12">
            Seasoned rice, fresh fish, delicate flavors, elegant presentation, a harmonious blend of taste and texture.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
                rel="Explore Recipes"
                href="#"
                className=""
              >
                <a href="#_" class="relative inline-block text-lg group">
                <span class="font-Noto relative z-10 block px-5 py-3 overflow-hidden font-bold leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#C4DE39] group-hover:-rotate-180 ease"></span>
                <span class="relative">Explore Recipes</span>
                </span>
                <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
                </a>
             
            </div>
          </div>
          <div className="m-auto flex items-center justify-center p-6 mt-8  lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={CategorySushi}
              alt="Sushi"
              className="object-contain m-auto h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      

       
    </Carousel>
  );
}
