/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

function login() {
  const [emails, setEmail] = React.useState("");
  const [passwords, setPassword] = React.useState("");
  const [isLoading, setIsloading] = React.useState(false);
  const [errMessage, setErrMessage] = React.useState("");
  const [loginSucces, setLoginSucces] = React.useState(false)

  const handleLogin = () => {
    setIsloading(true);
    axios
      .post("https://hire-job.onrender.com/v1/auth/login", {
        email: emails,
        password: passwords,
      })
      .then((res) => {
        console.log(res);
        setCookie("token", res?.data?.data?.token);
        setCookie("user", JSON.stringify(res?.data?.data?.user));
        window.location.href = "/"
        setLoginSucces(true)
      })
      .catch((err) => {
        console.error(err);
        const errEmailNull = err?.response?.data?.messages.email?.message;
        const errPasswordNull = err?.response?.data?.messages.password?.message;
        const errEmailNotRegister = err?.response?.data?.messages;
        const errWrongPass = err?.response?.data?.messages;

        setErrMessage(
          errEmailNull || errPasswordNull || errEmailNotRegister || errWrongPass
        );
      })
      .finally(() => setIsloading(false));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* section image left */}

        <div className="col-1 mb-6 md:mb-[0px]">
          <div>
            <div className="absolute bg-[#5E50A1] w-[127%] h-[100vh] md:w-[100vh] md:h-[100vh] opacity-[.67]" />
            {/*overlay*/}
            <div className="absolute p-[20px]">
              <img src="/logo_white.png" alt="img-login" />
            </div>

            <div className="absolute inset-0 flex justify-center items-center text-[30px] md:text-[40px] w-[100%] md:w-[40%] md:p-[30px] text-[white] mx-[30px] md:mx-[0px]">
              <p>
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </p>
            </div>

            <div className="w-[127%] md:w-[100vh] md:h-[100vh] overflow-hidden">
              <img
                className="w-[100vh] h-[100vh] object-cover"
                src="/loginimg.png"
                alt="img-login"
              />
            </div>
          </div>
        </div>

        {/* section form */}
        <div className="container flex items-center mx-[50px] md:mx-[0px] mb-[30px] md:mb-[0px]">
          <div className="grid w-[570px]">
            <div>
              <p className="text-[30px] mb-[20px]">Halo, Pewpeople</p>
              <p className="text-[14px] text-[#46505C] mb-[20px]">
                Silahkan masukan username dan kata sandi, atau anda juga bisa
                registrasi dengan klik Daftar
              </p>
            </div>
            {errMessage ? (
              <div>
                <button className="border border-2 rounded-[5px] border-[orange] bg-[orange] text-white p-2">
                  {errMessage
                    ? `Please Makesure The Data, Cuse ${errMessage}`
                    : null}
                </button>
              </div>
            ) : null}

            {loginSucces ? (
              <div>
                <button className="border border-2 rounded-[5px] border-[#1c46ed] bg-[#1c46ed] text-white p-2 mt-6">
                  {loginSucces
                    ? `Login Succes...`
                    : null}
                </button>
              </div>
            ) : null}

            <label for="basic-url" className="form-label text-[12px] py-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className="border border-[#E2E5ED] p-2"
              onChange={(item) => setEmail(item.target.value)}
            />
            <label for="basic-url" className="form-label text-[12px] py-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="border border-[#E2E5ED] p-2"
              onChange={(item) => setPassword(item.target.value)}
            />

            <div className="flex justify-end mt-[10px]">
              <p>Lupa kata sandi?</p>
            </div>

            <button
              className="border border-[#FBB017] bg-[#FBB017] text-[white] p-3 mt-[10px] rounded-[4px]"
              onClick={() => handleLogin()}
            >
              {isLoading ? "Loading.." : "Masuk"}
            </button>

            <div className="flex justify-center gap-2 mt-[10px]">
              <p>Anda belum punya akun?</p>
              <p className="text-[#FBB017]"> Daftar disini</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
