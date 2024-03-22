import React, { useState } from 'react';
import ClickRamen from '../Click/ClickRamen';
import ClickBento from '../Click/ClickBento';
import ClickGohan from '../Click/ClickGohan';
import ClickKatsudon from '../Click/ClickKatsudon';
import ClickSoba from '../Click/ClickSoba';
import ClickTempura from '../Click/ClickTempura'

import FeaturedBento from '../assets/FeaturedBento.png'
import FeaturedGohan from '../assets/FeaturedGohan.png'
import FeaturedKatsudon from '../assets/FeaturedKatsudon.png'
import FeaturedRamen from '../assets/FeaturedRamen.png'
import FeaturedSoba from '../assets/FeaturedSoba.png'
import FeaturedTempura from '../assets/FeaturedTempura.png'

function Featured() {
  const [showClickRamen, setShowClickRamen] = useState(false);
  const [showClickBento, setShowClickBento] = useState(false);
  const [showClickGohan, setShowClickGohan] = useState(false);
  const [showClickKatsudon, setShowClickKatsudon] = useState(false);
  const [showClickSoba, setShowClickSoba] = useState(false);
  const [showClickTempura, setShowClickTempura] = useState(false);
 

  const handleClickOutside = () => {
    setShowClickRamen(false);
    setShowClickBento(false);
    setShowClickGohan(false);
    setShowClickKatsudon(false);
    setShowClickSoba(false);
    setShowClickTempura(false);
  };

  const handleImageMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.1)';
  };

  const handleImageMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  const handleImageClickRamen = (e) => {
    e.stopPropagation();
    setShowClickRamen(true);
  };

  const handleImageClickBento = (e) => {
    e.stopPropagation();
    setShowClickBento(true);
  };

  const handleImageClickGohan = (e) => {
    e.stopPropagation();
    setShowClickGohan(true);
  };
  
 
  const handleImageClickKatsudon = (e) => {
    e.stopPropagation();
    setShowClickKatsudon(true);
  };
  
  
  const handleImageClickSoba = (e) => {
    e.stopPropagation();
    setShowClickSoba(true);
  };

  const handleImageClickTempura = (e) => {
    e.stopPropagation();
    setShowClickTempura(true);
  };


  const imageStyle = {
    transition: 'all 0.5s ease',
    transform: 'scale(1)',
  };

  return (
    <div onClick={handleClickOutside}>
      <section className="">
        <div className="container flex flex-col-reverse justify-center p-6 mx-auto  xs:py-6 sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="container  mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div className="-m-1 flex flex-wrap  md:-m-2">
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    style={imageStyle}
                    className="block h-full w-full object-cover object-center xs:w-110% lg:w-100% cursor-pointer"
                    src={FeaturedRamen}
                    onClick={handleImageClickRamen}
                    onMouseEnter={handleImageMouseEnter}
                    onMouseLeave={handleImageMouseLeave}
                  />
                </div>
              </div>

              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    style={imageStyle}
                    className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                    src={FeaturedBento}
                    onClick={handleImageClickBento}
                    onMouseEnter={handleImageMouseEnter}
                    onMouseLeave={handleImageMouseLeave}
                  />
                </div>
              </div>

              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    style={imageStyle}
                    className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                    src={FeaturedGohan}
                    onClick={handleImageClickGohan}
                    onMouseEnter={handleImageMouseEnter}
                    onMouseLeave={handleImageMouseLeave}
                  />
                </div>
              </div>

              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    style={imageStyle}
                    className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                    src={FeaturedKatsudon}
                    onClick={handleImageClickKatsudon}
                    onMouseEnter={handleImageMouseEnter}
                    onMouseLeave={handleImageMouseLeave}
                  />
                </div>
              </div>

              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    style={imageStyle}
                    className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                    src={FeaturedSoba}
                    onClick={handleImageClickSoba}
                    onMouseEnter={handleImageMouseEnter}
                    onMouseLeave={handleImageMouseLeave}
                  />
                </div>
              </div>

              
              <div className="flex w-1/3 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    style={imageStyle}
                    className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                    src={FeaturedTempura}
                    onClick={handleImageClickTempura}
                    onMouseEnter={handleImageMouseEnter}
                    onMouseLeave={handleImageMouseLeave}
                  />
                </div>
              </div>
         
              

              
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-Mono font-bold leading-none md:text-5xl lg:text-6xl">
              Introducing our featured<span className="text-[#C4DE39]"> Japanese </span>dishes of the week!
            </h1>
          </div>
        </div>
      </section>

      {showClickRamen && <ClickRamen />}
      {showClickBento && <ClickBento />}
      {showClickGohan && <ClickGohan />}
      {showClickKatsudon && <ClickKatsudon />}
      {showClickSoba && <ClickSoba />}
      {showClickTempura && <ClickTempura />}
    </div>
  );
}

export default Featured;
