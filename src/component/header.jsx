import React from "react";
import { useState } from "react"; // import state

function Header() {
  return (
    <>
      {/* header */}

      <div className="container mx-auto mt-6">
        <div className="flex justify-between">
          <img  src="/logo_grape.png" alt="logo" style={{height:"35px", width:"auto"}}/>
          <div className="invisible md:visible flex gap-3">
            <button class="p-1 rounded border-4 btn-signin w-1/2">Masuk</button>
            <button class="p-1 rounded border-4 btn-signup w-1/2">
              Daftar
            </button>
          </div>

          <div className="md:hidden mx-10">
            <button>
              <img className="" src="/ham.png" alt="burger"  style={{height:"35px", width:"35px"}}/>
            </button>
          </div>
        </div>
      </div>
      {/* header */}
    </>
  );
}

export default Header;
