import React, { useState } from 'react';
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <div className='container -ml-4 items-center justify-center left-0 right-0 z-[1] block fixed'>
      <header className='my-[0] w-[100vw] px-5 py-[0.75rem] md:px-[2rem]'>
        <nav className='flex items-start justify-between md:justify-center'>
          <div className='relative flex w-full flex-wrap items-center justify-between gap-6 z-50'>
            <h1 className={`${menuActive ? 'blur-text' : ''} text-white`}>Game Haven</h1>
          </div>
          <button
            className={`text-4xl lg:hidden text-white bg-[#071013] p-2 rounded ${
              menuActive ? 'hidden' : ''
            }`}
            aria-label='Menu button'
            type='button'
            onClick={() => setMenuActive(true)}
          >
            <RiMenu4Fill />
          </button>
          {menuActive && (
            <div className='fixed top-0 left-0 w-full h-full bg-[#888888] backdrop-blur-[2px]'>
              <div
                className={`w-full h-screen flex flex-col items-center justify-center gap-[2rem] lg:flex-row lg:gap-[0.6rem] transition-all duration-1000 lg:w-max lg:h-max lg:!z-40 lg:static lg:bg-inherit lg:p-0 lg:top-auto lg:left-auto lg:![clip-path:unset] lg:transition-none`}
                style={{
                  clipPath: menuActive ? 'circle(100% at 50% 50%)' : 'circle(0% at 100% 0)',
                }}
              >
                <button
                  className={`text-4xl lg:hidden text-white bg-[#071013] p-2 rounded fixed top-[4rem] right-[5rem] ${
                    menuActive ? '' : 'hidden'
                  }`}
                  aria-label='Close button'
                  type='button'
                  onClick={closeMenu}
                >
                  <RiCloseFill />
                </button>
                <Link
                  to='/sign-up'
                  className='hov-bg-theme w-full rounded px-4 py-2 font-bold transition-all ease-out hover:-translate-y-1 hover:cursor-pointer lg:w-auto text-center text-[#071013]'
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
                <Link
                  to='/login'
                  className='hov-bg-theme w-full rounded px-4 py-2 font-bold transition-all ease-out hover:-translate-y-1 hover:cursor-pointer lg:w-auto text-center text-[#071013]'
                  onClick={closeMenu}
                >
                  Log In
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;