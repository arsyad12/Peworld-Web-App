/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

function contact() {
  return (
    <>
      <Header />
      <div className="bg-[#F6F7F8]">
        <div className="grid grid-cols-12">
          <div className="col-span-5 bg-[green] h-[800px] w-full">
            <div className="border border-[#FFFFFF] bg-[#FFFFFF] m-10">
              <div className="content p-5">
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
                      Dengan Kemaampuan yang saya miliki akan sangat membantu
                      saya dalam menemukan problem solving di perusahaan anda
                      dan tentunya akan menjalankan sebuah skema base practice
                      dalam memulai sebuah project”
                    </p>
                  </div>
                  <button
                        
                          className="border-2  bg-[#FBB01799] w-[120px] mt-[15px] md:mt-[5px] mb-[10px] rounded-[4px] border-[#FBB01799]"
                        >
                         Bla Bla Blas
                    </button>
              </div>
            </div>
          </div>

          <div className="col-span-7 bg-[red] h-[90px] w-full"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default contact;
