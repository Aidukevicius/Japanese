import React from 'react';

function Featured() {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="src\assets\FeaturedRamen.png" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="src\assets\FeaturedBento.png" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="src\assets\FeaturedGohan.png" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="src\assets\FeaturedTempura.png" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="src\assets\FeaturedKatsudon.png" />
      </div>
    </div>
    <div class="flex w-1/3 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="src\assets\FeaturedSoba.png" />
      </div>
    </div>
  </div>
</div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="font-Mono text-5xl font-bold leading-none sm:text-6xl"><h2 className="text-5xl font-bold">Introducing our featured<span className="text-[#C4DE39]"> Japanese </span>dishes of the week!</h2>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featured;


