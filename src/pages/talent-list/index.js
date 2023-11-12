/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import axios, { all } from "axios";
import Router from "next/router";
import { Aldrich } from "next/font/google";

function Talent(props) {
  const [listData, setListData] = React.useState(props.data.slice(0, 4));

  const [currentPage, setCurrentPage] = React.useState(1);

  const countData = Math.round(props?.data?.length / 4);

  const [searchBar, setSearchBar] = React.useState("");

  const handlePagination = (nextPage) => {
    setCurrentPage(nextPage);

    if (nextPage > 1) {
      setListData(props?.data?.slice(4 * (nextPage - 1), 4 * nextPage));
    } else {
      setListData(props?.data?.slice(0, 4));
    }
  };

  // console.log(currentPage)
  // console.log(listData);

  return (
    <>
      <Head>
        <title>Talent List</title>
      </Head>

      <Header />

      <div className="bg-[#F6F7F8]">
        {/* Head */}
        <div className="flex items-center mt-5 bg-[#5E50A1] h-[80px]  ">
          <h5 className="text-[white] text-[20px] mx-10 ">
            Top Talent | Peworlds
          </h5>
        </div>

        {/* end of head */}

        {/* search bar */}
        <div className="m-10 search-bar">
          <div className="container flex">
            <input
              className="w-full border drop-shadow-md p-3 rounded-[5px]"
              type="text"
              placeholder="Username"
              onChange={(item) => setSearchBar(item.target.value)}
            ></input>

            <img
              src="/search.png"
              alt="search"
              className="absolute p-3 mx-[43%] md:mx-[80%]"
            />

            <img
              src="/line 2.png"
              alt="search"
              className="absolute mx-[55%]  md:mx-[84%] p-1 h-[50px]"
            />

            <div className="absolute p-2 mx-[60%] md:mx-[85%]">
              <button className=" border-4 border-[#5E50A1] bg-[#5E50A1] text-[#FFFFFF] rounded-[5px] p-[2px] w-[60px] md:w-[100px]">
                Search
              </button>
            </div>
          </div>
        </div>
        {/* end of search bar */}

        {/* card */}
        <div className="m-10 card-talent">
          <div className="container">
            {listData.filter((item) => (item.fullname.includes(searchBar))).map((item, key) => (
              <div key={key} className="border bg-[white] drop-shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-8">
                  <div className="img-profile flex justify-center md:justify-left p-[20px] ">
                    <img src={item.photo} alt="photo" />
                  </div>

                  <div className="identity col-span-5">
                    <p className="pt-[5px] md:pt-[10px] text-center md:text-left">
                      {item.fullname}
                    </p>
                    <p className="pt-[10px] md:pt-[10px] text-center md:text-left">
                      {item.role}
                    </p>

                    <div className="pt-[10px] flex gap-2 justify-center md:justify-start">
                      <img
                        src="/map.png"
                        className="w-[16px] h-[16px] mt-[3px]"
                      />
                      <p className="text-[14px]">{item.location}</p>
                    </div>

                    <div className="flex justify-center md:justify-start gap-2 md:gap-3  m-2">
                      {item.skill.map((item, key) => (
                        <button
                          key={key}
                          className="border-2  bg-[#FBB01799] w-[120px] mt-[15px] md:mt-[5px] mb-[10px] rounded-[4px] border-[#FBB01799]"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="identity col-span-2 flex items-center flex justify-center md:justify-start mb-[20px]">
                    <button
                      onClick={() =>
                        Router.push(`/talent-list/detail/${item.id}`)
                      }
                      className="border-2 p-[2px] bg-[#5E50A1] w-1/2 text-[white] rounded-[4px] border-[#5E50A1] mt-[5px] md:mt-[20px]"
                    >
                      Lihat Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* end of card */}

        {/* pagination */}
        <div className="container mt-20">
          <div className="flex justify-center gap-[10px]">
            <div className="previous">
              <button className="border-2 bg-[#FFFFFF] border-[#E2E5ED] p-[12px]">
                <img src="/previous.png" />
              </button>
            </div>

            {[...Array(countData)]?.map((item, key) => {
              // console.log(key)
              const incrementValueButton = ++key;
              return (
                <div key={incrementValueButton} className="number-pagination">
                  <button
                    className={` ${
                      key === currentPage
                        ? "border-2 bg-[#5E50A1] border-[#5E50A1] p-[10px] text-[white]"
                        : "border-2 bg-[#FFFFFF] border-[#E2E5ED] p-[10px]"
                    }`}
                    onClick={() => handlePagination(incrementValueButton)}
                  >
                    {incrementValueButton}
                  </button>
                </div>
              );
            })}

            <div className="forward">
              <button className="border-2 bg-[#FFFFFF] border-[#E2E5ED] p-[12px]">
                <img src="/forward.png" />
              </button>
            </div>
          </div>
        </div>
        {/* end of pagination */}

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const request = await axios({
    method: "get",
    url: "http://localhost:3000/api/listTalent",
  });

  return { props: request.data };
}
export default Talent;
