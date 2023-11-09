import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer mt-20 grid grid-cols-1">
        <div className="px-10 pt-10">
          <img src="/logo_white.png" alt="logowhite" />
          <p className="pt-10 p-footer">
            Jl. Yos Sudarso No.KM. 8, Umban Sari, Kec. Rumbai, Kota Pekanbaru,
            Riau 28266
          </p>
          <hr className="mt-10" />
        </div>

        <div className=" grid grid-cols-2 mb-20">
          <div className="px-10 pt-10">
            <p className="p-footer">2020 Pewworld. All right reserved</p>
          </div>
          <div className="flex justify-end gap-10 pr-10 pt-10">
            <p className="p-footer">Telepon</p>
            <p className="p-footer">Email</p>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
