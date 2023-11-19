/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import axios from "axios";
import { getCookie } from "cookies-next";
function Contact(props) {
  // console.log(props);
  const { data } = props;

  const token = getCookie("token");
  // console.log(token)

  // const [user,setUser] = React.useState(getCookie("user"))
  const [sender, setSender] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleMessage = () => {
    axios
      .post(
        `https://hire-job.onrender.com/v1/contact`,
        {
          to: data.socmed.email,
          toName: data.fullname,
          sender: sender,
          subject: subject,
          description: message,
        },
        {headers : {Authorization:`Bearer ${token}`}}
        )

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
                <div className="mt-[10px] text-[20px] text-center">
                  <p>{data.fullname}</p>
                </div>
                <div className="mt-[10px] text-[12px] text-justify mb-[10px]">
                  <p>
                    Senior Developer dengan Pengalaman lebih dari 15tahun dalam
                    development sebuah web dan software
                  </p>
                </div>
                <div className="mt-[10px] flex gap-2">
                  <div className=" mt-[10px] mb-[10px]">
                    <img src="/map.png" alt="map" />
                  </div>
                  <div className="text-[12px] text-[grey] mt-[10px] mb-[10px]">
                    <p>{data.location}</p>
                  </div>
                </div>
                <div className="mt-[10px] text-[12px] text-[grey] text-justify">
                  <p>
                    Dengan Kemaampuan yang saya miliki akan sangat membantu saya
                    dalam menemukan problem solving di perusahaan anda dan
                    tentunya akan menjalankan sebuah skema base practice dalam
                    memulai sebuah project”
                  </p>
                </div>

                <div className="mt-[20px] md:flex md:justify-center md:flex-wrap">
                  {data.skill.map((item, key) => (
                    <button
                      key={key}
                      className="border border-2 bg-[#FBB017] border-[#FBB01799] text-[white] p-2 mx-1 mb-2"
                    >
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
              <div className="grid w-[80%] md:w-[800px]">
                <div className="subhead">
                  <p className="text-[30px] mb-[20px]">Halo, Pewpeople</p>
                  <p className="text-[14px] text-[#46505C] mb-[20px]">
                    Silahkan masukan username dan kata sandi, atau anda juga
                    bisa registrasi dengan klik Daftar
                  </p>
                </div>

                <label for="basic-url" className="form-label text-[12px] py-2">
                  Sender
                </label>
                <input
                  type="text"
                  placeholder="Fill with your email"
                  className="border border-[#E2E5ED] p-2"
                  onChange={(item) => setSender(item.target.value)}
                />

                <label for="basic-url" className="form-label text-[12px] py-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Fill the subject"
                  className="border border-[#E2E5ED] p-2"
                  onChange={(item) => setSubject(item.target.value)}
                />

                <label for="basic-url" className="form-label text-[12px] py-2">
                  Message
                </label>
                <textarea
                  type="text"
                  placeholder="Type Your Message"
                  className="border border-[#E2E5ED] p-2"
                  onChange={(item) => setMessage(item.target.value)}
                />

                <div className="flex justify-end mt-[10px]">
                  <p>Lupa kata sandi?</p>
                </div>

                <button
                  className="border border-[#FBB017] bg-[#FBB017] text-[white] p-3 mt-[10px] rounded-[4px]"
                  onClick={(()=>handleMessage())}
                >
                  Send Messages
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

export async function getServerSideProps({ req, res, params }) {
  // cara mengambil data dari cookies lewat serverside, harus ada {req,res}
  // di next js req data berdasarkan parameter dipanggil dengan props/params bukan dengan (req,res)
  // destrukturing variabel bernama id kemudia isi dengan nilai dari parameter params/props
  // karena kita mau memastikan data login terlebih dahulu jadi susunan parameter nya adalah req, res, params

  const { id } = params;
  console.log(id); //harusnya hasilnya 1

  const user = getCookie("user", { req, res });
  const token = getCookie("token", { req, res });

  console.log(user);
  console.log(token);

  if (!user && !token) {
    //jika data login di cookie tidak ada, maka akan di reiretc ke halaman talent list berdasarkan id

    return {
      redirect: {
        permanent: false,
        destination: `/talent-list/detail/${id}`, //redirect agar halaman kontak tidak bisa diakses sebelum login dan ada data cookie
      },
    };
  }

  const request = await axios({
    method: "get",
    url: `http://localhost:3000/api/listTalent?id=${id}`, //kemudain request ambil data yang parameter id nya sama dengan id dari props.params
  });

  return { props: request.data };
}

export default Contact;
