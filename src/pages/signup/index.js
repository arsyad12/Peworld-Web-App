/* eslint-disable @next/next/no-img-element */
import React from "react";

function signup() {
  return (
    <>
      <div className="grid grid-cols-2">
        {/* section image left */}

        <div className="col-1">
          <div>
            <div className="absolute bg-[#5E50A1] w-[100vh] h-[100vh] opacity-[.67]" />{" "}
            {/*overlay*/}
            <div className="absolute p-[20px]">
              <img src="/logo_white.png" alt="img-login" />
            </div>
            
            <div className="absolute inset-0 flex justify-center items-center text-[40px] w-[40%]  p-[30px] text-[white]">
              <p>
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </p>
            </div>

            <div>
              <img
                className="w-[100vh] h-[100vh] object-cover"
                src="/loginimg.png"
                alt="img-login"
              />
            </div>
          </div>
        </div>

        {/* section form */}
        <div className="container flex items-center  ">
          <div className="grid w-[570px]">
            
            <div className="mt-6">
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
    </>
  );
}

export default signup;
