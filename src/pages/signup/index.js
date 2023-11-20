/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import axios from "axios";
import Router from "next/router";
function signup() {
  const router = Router
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [job, setJob] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [errMessage, setErrMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [regSucces, setRegSuccess] = React.useState(null);

  const registerHandler = () => {
    setLoading(true);
    axios({
      method: "post",
      url: `https://hire-job.onrender.com/v1/auth/register`,
      data: {
        email: email,
        password: password,
        fullname: fullname,
        company: company,
        job_title: job,
        phone: phone,
      },
    })
      .then((result) => {
        console.log(result);
        setRegSuccess(true);
        router.push('/login')
      })
      .catch((err) => {
        console.log(err);

        const errFullname = err?.response?.data?.messages?.fullname?.message;
        const errEmail = err?.response?.data?.messages?.email?.message;
        const errPassword = err?.response?.data?.messages?.password?.message;
        const errPhone = err?.response?.data?.messages?.phone?.message;

        setErrMessage(errFullname ?? errEmail ?? errPassword ?? errPhone);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* section image left */}

        <div className="col-1">
          <div>
            <div className="absolute bg-[#5E50A1] w-[127%] h-[100vh] md:w-[100vh] md:h-[100vh]  opacity-[.67]" />{" "}
            {/*overlay*/}
            <div className="absolute p-[20px]">
              <img src="/logo_white.png" alt="img-login" />
            </div>
            <div className="absolute inset-0 flex justify-center items-center text-[27px] md:text-[40px] w-[100%] md:w-[40%]  p-[30px] text-[white] mx-[30px] md:mx-[0px]">
              <p>
                Temukan developer berbakat & terbaik di berbagai bidang keahlian
              </p>
            </div>
            <div className="w-[127%] h-[100vh] md:w-[100vh] md:h-[100vh] ">
              <img
                className="w-[100vh] h-[100vh] object-cover"
                src="/loginimg.png"
                alt="img-login"
              />
            </div>
          </div>
        </div>

        {/* section form */}
        <div className="container flex items-center mx-[50px] md:mx-[0px] ">
          <div className="grid w-[570px]">
            <div className="mt-6">
              <p className="text-[30px] mb-[20px]">Halo, Pewpeople</p>
              <p className="text-[14px] text-[#46505C] mb-[20px]">
                Passtikan data yang digunakan untuk registrasi adalah data yang
                valid
              </p>
            </div>

            {errMessage ? (
              <div className="border border-2 border-[#ffc720] rounded-[5px] bg-[#ffc720] mt-2 mb-2">
                <p className="p-2">{errMessage}</p>
              </div>
            ) : (
              false
            )}

            {regSucces ? (
              <div className="border border-2 border-[#0dcaf0] rounded-[5px] bg-[#0dcaf0] mt-2 mb-2">
                <p className="p-2">Register Succes</p>
              </div>
            ) : null}

            <label for="basic-url" className="form-label text-[12px] py-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Fill With Your Fullname"
              className="border border-[#E2E5ED] p-2"
              onChange={(item) => setFullname(item.target.value)}
            />

            <label for="basic-url" className="form-label text-[12px] py-2">
              Email
            </label>
            <input
              type="text"
              placeholder="Fill With Your Email"
              className="border border-[#E2E5ED] p-2"
              onChange={(item) => setEmail(item.target.value)}
            />

            <label for="basic-url" className="form-label text-[12px] py-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Type Your Password"
              className="border border-[#E2E5ED] p-2"
              onChange={(item) => setPassword(item.target.value)}
            />

            <label for="basic-url" className="form-label text-[12px] py-2">
              Job
            </label>
            <input
              type="text"
              placeholder="Fill With Your Job"
              className="border border-[#E2E5ED] p-2"
              onChange={(item) => setJob(item.target.value)}
            />

            <label for="basic-url" className="form-label text-[12px] py-2">
              Company
            </label>
            <input
              type="text"
              placeholder="Fill With Your Company"
              className="border border-[#E2E5ED] p-2"
              onChange={(item) => setCompany(item.target.value)}
            />

            <label for="basic-url" className="form-label text-[12px] py-2">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Fill With Your Phone Number"
              className="border border-[#E2E5ED] p-2"
              onChange={(item) => setPhone(item.target.value)}
            />

            <button
              className={
                loading
                  ? "border border-[#6c757d] bg-[#6c757d] text-[white] p-3 mt-[10px] rounded-[4px] mb-[30px] mt-[30px]"
                  : "border border-[#FBB017] bg-[#FBB017] text-[white] p-3 mt-[10px] rounded-[4px] mb-[30px] mt-[30px]"
              }
              onClick={() => registerHandler()}
              disabled={loading}
            >
              {loading ? "Loading..." : "SIGNUP"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default signup;
