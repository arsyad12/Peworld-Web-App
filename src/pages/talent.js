import React from "react";
import Header from "@/component/header";
import Footer from "@/component/footer";
function Talent() {
  return (
    <>
      <Header />

      <div className="bg-[#F6F7F8]">
        {/* Head */}
        <div className="flex items-center mt-5 bg-[#5E50A1] h-[80px]  ">
          <h5 className="text-[white] text-[28px] mx-10">Top Jobs</h5>
        </div>
        {/* end of head */}

        {/* card */}
        <div className="container">
          <div className="border bg-[white] drop-shadow-md m-20">
            <div className="grid grid-cols-1 md:grid-cols-8">
              <div className="img-profile flex justify-center md:justify-left p-[20px] ">
                <img src="/Ellipse 326.png" alt="photo" />
              </div>

              <div className="identity col-span-5">
                <p className="pt-[5px] md:pt-[10px] text-center md:text-left">
                  Louis Tomlinson
                </p>
                <p className="pt-[10px] md:pt-[10px] text-center md:text-left">
                  Web developer
                </p>

                <div className="pt-[10px] flex gap-2 justify-center md:justify-start">
                  <img src="/map.png" className="w-[16px] h-[16px]" />
                  <p>Jakarta Raya</p>
                </div>

                <div className="flex justify-center md:justify-start gap-2 md:gap-3  m-2">
                    {['PHP','Javascript','React Js']?.map((item,key) => (
                  <button key={key} className="border-2  bg-[#FBB01799] w-[120px] mt-[15px] md:mt-[5px] mb-[10px] rounded-[4px] border-[#FBB01799]">
                    {item}
                  </button>
                  ))}
                </div>
              </div>

              <div className="identity col-span-2 flex items-center flex justify-center md:justify-start mb-[20px]">
                <button className="border-2 p-[2px] bg-[#5E50A1] w-1/2 text-[white] rounded-[4px] border-[#5E50A1] mt-[5px] md:mt-[20px]">
                  Lihat Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end of card */}

        <Footer />
      </div>
    </>
  );
}

export default Talent;
