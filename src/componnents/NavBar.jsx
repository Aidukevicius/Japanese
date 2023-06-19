import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Input,
} from "@material-tailwind/react";
import Logo from '../assets/Logo.png'
import "@fortawesome/fontawesome-free/css/all.min.css";
 
export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul id="navbar-links" className="text-green mb-4  mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <li>
      <Typography
        as="a"
        href="/"
        variant="small"
        className="p-1 font-normal font-Mono text-3xl"
        style={{
          color: scrolled ? 'white' : 'black',
        }}
        onMouseEnter={(e) => e.target.style.color = '#C4DE39'}
        onMouseLeave={(e) => e.target.style.color = scrolled ? 'white' : 'black'}
      >
        Home
      </Typography>
      </li>
      <li>
      <Typography
        as="a"
        href="/about"
        variant="small"
        className="p-1 font-normal font-Mono text-3xl"
        style={{ color: scrolled ? 'white' : 'black' }}
        onMouseEnter={(e) => e.target.style.color = '#C4DE39'}
        onMouseLeave={(e) => e.target.style.color = scrolled ? 'white' : 'black'}
      >
        About
      </Typography>
    </li>
    <li>
      <Typography
        as="a"
        href="/recipes"
        variant="small"
        className="p-1 font-normal font-Mono text-3xl"
        style={{ color: scrolled ? 'white' : 'black' }}
        onMouseEnter={(e) => e.target.style.color = '#C4DE39'}
        onMouseLeave={(e) => e.target.style.color = scrolled ? 'white' : 'black'}
      >
        Recipes
      </Typography>
    </li>

    </ul>
  );
 
  return (
    <>
      <Navbar className={`z-20 bg-opacity-100 blur-none sticky py-0 outline-none border-none shadow-none inset-0  h-max max-w-full rounded-none  px-4 lg:px-8  ${scrolled ? 'bg-[#2c2c2c]' : ''}`}>
        <div className="flex items-center justify-between text-blue-gray-900 lg:mr-20">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer pt-1.5 font-medium"
          >
            <img src={Logo} className="w-auto max-h-24 lg:ml-20" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Input
              className={`!bg-[#C4DE39] lg:w-[18rem]`}
              label={
                <label
                  style={{
                    color: scrolled ? 'white' : 'black',
                    fontWeight: '1000',
                  }}
                >
                  Search
                </label>
              }
              icon={<i className="fa-sharp fa-solid fa-magnifying-glass" style={{ color: scrolled ? 'white' : 'black' }} />}
              color={scrolled ? 'white' : 'black'}
            />
            <IconButton
              variant="text"
              className=" ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden ${scrolled ? 'bg-[#2c2c2c]' : 'white'}`}"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  color={scrolled ? 'white' : 'black'}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  color={scrolled ? 'white' : 'black'}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
    </>
  );
}