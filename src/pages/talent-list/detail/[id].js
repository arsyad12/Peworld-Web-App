/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import axios from "axios";
import Router from "next/router";
import { getCookie } from "cookies-next";

function Detail(props) {
  const { data } = props;

  const user = getCookie("user") ? JSON.parse(getCookie("user")) : null;

  console.log(user);

  console.log(data);
  return (
    <>
      <Head>
        <title>Talent List</title>
      </Head>

      <Header />

      <div className="bg-[#F6F7F8] ">
        <div className="wrap2border p-10 m-10">
          <div className="container mx-auto border rounded-t-[10px] bg-[#5E50A1] h-[100px] flex justify-center pt-12">
            <img
              src={data.photo}
              alt="avatar"
              className="absolute w-[100px] h-[100px] rounded-full"
            />
          </div>
          <div className="container mx-auto border bg-[#FFFFFF]">
            <div className="mt-[80px] grid grid-col-q justify-center">
              <div className="text-center text-[22px] text-[bold]">
                <p>{data.fullname}</p>
              </div>
              <div className="text-center text-[14px]  pt-[10px]">
                <p>{data.role}</p>
              </div>

              <div className="flex justify-center gap-2 pt-[10px]">
                <div className="img-map pt-[3px]">
                  <img src="/map.png" alt="map" className="h-[16px] w-[16px]" />
                </div>
                <div className="text-center text-[14px] text-[#9EA0A5]">
                  <p>{data.location}</p>
                </div>
              </div>

              <div className="pt-[10px] text-[14px] text-center text-[#9EA0A5]">
                <p>Freelancer</p>
              </div>

              <div className="pt-[10px] text-[14px] text-center text-[#9EA0A5]">
                <p>Profesional Freelancer As Fullstack Developer</p>
              </div>
            </div>

            <div className="mt-6 grid grid-col-1 justify-center">
              {user? (
                <button
                  onClick={() => Router.push(`/talent-list/contact/${data.id}`)}
                  className="border border-4 border-[#5E50A1] bg-[#5E50A1] w-[120px] md:w-[297px] h-[40px] md:h-[50px] p-1 text-[white] rounded-[5px]"
                >
                  HIRE
                </button>
              ) : (
                <button
                  onClick={() => Router.push(`/talent-list/contact/${data.id}`)}
                  className="border border-4 border-[grey] bg-[grey] w-[120px] md:w-[297px] h-[40px] md:h-[50px] p-1 text-[white] rounded-[5px]"
                >
                  LOGIN FIRST FOR HIRE
                </button>
              )}
            </div>

            <div className="mt-6 grid grid-col-2 justify-center">
              <div className="text-center text-[22px] text-[bold]">
                <p>Skills</p>
              </div>
            </div>

            <div className="flex justify-center mt-[10px] mb-[50px]">
              <div className="w-[300px] grid justify-items-center md:flex md:flex-wrap md:justify-center md:gap-2">
                {data.skill.map((item, key) => (
                  <button
                    key={key}
                    className="border-2  bg-[#FBB01799] w-[120px] mt-[15px] md:mt-[5px] mb-[10px] rounded-[4px] border-[#FBB01799]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(props) {
  //di next js req data berdasarkan parameter dipanggil dengan props bukan dengan (req,res)
  // destrukturing variabel bernama id kemudia isi dengan nilai dari parameter props
  const { id } = props.params;
  console.log(id); //harusnya hasilnya 1
  const request = await axios({
    method: "get",
    url: `${process.env.BASE_URL}/api/listTalent?id=${id}`, //kemudain request ambil data yang parameter id nya sama dengan id dari props.params
  });

  return { props: request.data };
}

export default Detail;
