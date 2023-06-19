import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import {FireIcon, LightBulbIcon, CheckCircleIcon } from "@heroicons/react/24/solid"
import AboutImage from '../assets/About.png'

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-10 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-[#C4DE39] opacity-50 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              
              <h1 className="mt-2 text-3xl font-Mono font-bold tracking-tight text-black sm:text-4xl">Taste <span className="text-[#C4DE39]">Japan:</span> Authentic Recipes and Culinary Exploration</h1>
              <p className="mt-6 text-xl leading-8 font-Noto text-black">
                
Welcome to our <span className="text-[#C4DE39]">Japanese</span> Recipe Website! We are delighted to take you on a culinary journey through the rich and diverse world of Japanese cuisine. With a deep appreciation for traditional recipes and a passion for sharing authentic flavors, we strive to bring the essence of Japan's culinary heritage directly to your kitchen.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem]  rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={AboutImage}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base font-Noto leading-7 text-black lg:max-w-lg">
              <p>
              At our website, we are dedicated to providing you with a vast collection of carefully curated recipes, each capturing the essence of <span className="text-[#C4DE39]">Japanese</span> cooking techniques, ingredients, and presentation. Whether you are a seasoned chef or a curious beginner, we believe there is something for everyone to explore and savor.
              </p>
              <ul role="list" className="mt-8 space-y-8 font-Noto text-black">
                <li className="flex gap-x-3">
                  <FireIcon className="mt-1 h-5 w-5 flex-none text-[#C4DE39]" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold font-Noto text-black">Authentic.</strong> Explore our curated collection of authentic Japanese recipes, from traditional favorites to hidden gems, capturing the essence of <span className="text-[#C4DE39]">Japanese</span> cooking.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LightBulbIcon className="mt-1 h-5 w-5 flex-none text-[#C4DE39]" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gblack">Flavorful Variety.</strong> Discover a wide range of <span className="text-[#C4DE39]">Japanese</span> recipes that will tantalize your taste buds. From classic favorites to exciting innovations, our website offers a diverse selection of culinary delights to explore and enjoy.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-[#C4DE39]" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-black">Accessibility and Support.</strong> AWe provide ingredient substitution tips and clear instructions to ensure success in your <span className="text-[#C4DE39]">Japanese</span> culinary adventures, whether you're a seasoned chef or a beginner. Recreate the flavors of <span className="text-[#C4DE39]">Japan</span> wherever you are.
                  </span>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

