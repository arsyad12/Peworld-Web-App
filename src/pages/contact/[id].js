/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

function contact() {
  return (
    <>
        <Header />
      <div className="bg-[#F6F7F8] mt-6">
   
        <div className="grid grid-cols-1 md:grid-cols-12">
          
          <div className="col-1 md:col-span-4 w-full">
            <div className="border border-[#FFFFFF] bg-[#FFFFFF] m-10">
              
              <div className="card-content p-5 shadow-lg">
                <div className="flex items-center justify-center">
                  <img src="/Ellipse 326.png" alt="photo" />
                </div>
                <div className="mt-[10px] text-[20px]">
                  <p>Louis Thompson</p>
                </div>
                <div className="mt-[10px] text-[14px]">
                  <p>
                    Senior Developer dengan Pengalaman lebih dari 15tahun dalam
                    development sebuah web dan software
                  </p>
                </div>
                <div className="mt-[10px] flex gap-2">
                  <div className="pt-[1px]">
                    <img src="/map.png" alt="map" />
                  </div>
                  <div className="text-[14px]">
                    <p>Jakarta Raya, Daerah Kebayoran Baru</p>
                  </div>
                </div>
                <div className="mt-[10px] text-[14px]">
                  <p>
                    Dengan Kemaampuan yang saya miliki akan sangat membantu saya
                    dalam menemukan problem solving di perusahaan anda dan
                    tentunya akan menjalankan sebuah skema base practice dalam
                    memulai sebuah project”
                  </p>
                </div>

                <div className="mt-[10px] md:flex md:justify-center md:flex-wrap">
                    {['Javascript', "Tailwind",'SCSS','React JS','Next Js','React Native','React JS','Next Js'].map((item,key) => (
                  <button key={key} className="border border-2 bg-[#FBB017] border-[#FBB01799] text-[white] p-2 mx-1 mb-2">
                    {item}
                  </button>
                  ))}
                </div>

              </div>
            </div>
          </div>

          <div className="col-span-8 w-full md:m-10 bg-[]">
           {/* section form */}
        <div className="container flex justify-center md:justify-start items-center  ">
          <div className="grid w-[80%] md:w-[400px]">
            
            <div className="subhead">
              <p className="text-[30px] mb-[20px]">Halo, Pewpeople</p>
              <p className="text-[14px] text-[#46505C] mb-[20px]">
                Silahkan masukan username dan kata sandi, atau anda juga bisa
                registrasi dengan klik Daftar
              </p>
            </div>

            

            <label for="basic-url" className="form-label text-[12px] py-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Username"
              className="border border-[#E2E5ED] p-2"
            />

               <label for="basic-url" className="form-label text-[12px] py-2">
              Role
            </label>
            <input
              type="text"
              placeholder="Username"
              className="border border-[#E2E5ED] p-2"
            />

               <label for="basic-url" className="form-label text-[12px] py-2">
              Skill
            </label>
            <input
              type="text"
              placeholder="Username"
              className="border border-[#E2E5ED] p-2"
            />

              <label for="basic-url" className="form-label text-[12px] py-2">
              Address
            </label>
            <input
              type="text"
              placeholder="Username"
              className="border border-[#E2E5ED] p-2"
            />


               <label for="basic-url" className="form-label text-[12px] py-2">
              Email
            </label>
            <input
              type="text"
              placeholder="Username"
              className="border border-[#E2E5ED] p-2"
            />

            <label for="basic-url" className="form-label text-[12px] py-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="border border-[#E2E5ED] p-2"
            />
            

            <div className="flex justify-end mt-[10px]">
              <p>Lupa kata sandi?</p>
            </div>

            <button className="border border-[#FBB017] bg-[#FBB017] text-[white] p-3 mt-[10px] rounded-[4px]">
              Masuk
            </button>
            
            <div className="flex justify-center gap-2 mt-[10px] mb-6">
              <p>Anda belum punya akun?</p>
              <p className="text-[#FBB017]"> Daftar disini</p>
            </div>
            </div>
          </div>
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
}

export default contact;
