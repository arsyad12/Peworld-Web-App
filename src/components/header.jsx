/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function Header() {   
  return (
    <>
      {/* header */}

      <header className="container mx-auto mt-6 ">
        <nav className="flex justify-between drop-shadow-md">
          
          <img className="px-[15px] md:px-[1px]" src="/logo_grape.png" alt="logo" style={{height:"35px", width:"127px"}}/>
          
          <div className="invisible md:visible flex gap-3">
            <Link href={'/login'}><button className="p-1 rounded border-4 btn-signin w-1/8">Masuk</button></Link>
            <Link href={'/signup'}><button className="p-1 rounded border-4 btn-signup w-1/8">Daftar</button></Link>
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
