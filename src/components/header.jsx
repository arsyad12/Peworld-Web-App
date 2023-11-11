/* eslint-disable @next/next/no-img-element */
import React from "react";

function Header() {   
  return (
    <>
      {/* header */}

      <header className="container mx-auto mt-6 ">
        <nav className="flex justify-between">
          
          <img className="px-[15px] md:px-[1px]" src="/logo_grape.png" alt="logo" style={{height:"35px", width:"127px"}}/>
          
          <div className="invisible md:visible flex gap-3">
            <button className="p-1 rounded border-4 btn-signin w-1/8">Masuk</button>
            <button className="p-1 rounded border-4 btn-signup w-1/8">Daftar</button>
          </div>

          <div className="md:hidden mx-10">
            <button>
              <img className="" src="/ham.png" alt="burger"  style={{height:"35px", width:"35px"}}/>
            </button>
          </div>
        </nav>
      </header>
      {/* header */}
    </>
  );
}

export default Header;
