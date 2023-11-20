/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/*Section Header*/}
      <Header />
      {/*End of Section Header*/}

      {/*Section 1 */}

      <div className="container mx-auto mt-20">
        <div className="grid  grid-cols-1 md:grid-cols-3 items-center m-20">
          <div className="order-last md:order-first md:col-span-2">
            <h1 className="h1 mb-8">
              Talenta terbaik negri untuk perubahan revolusi 4.0
            </h1>
            <p className="text-justify">
              Peworld adalah web apps yang bertujuan untuk membantu kamu
              mendapatkan talent yang berkompeten di bidang teknologi. Melalui
              web, kamu berkesempatan untuk menemukan talent yang dilatih
              langsung dengan mentor yang kompeten di bidangnya.
            </p>
            <Link href={'/talent-list'}>
            <button class="p-2 rounded border-4 mt-10 btn-start mb-10">
              Mulai Dari Sekarang
            </button>
            </Link>
          </div>
          <div className="">
            <img className="" src="/firstpic.png" alt="logo" />
          </div>
        </div>
      </div>

      {/*End of Section 1 */}

      {/*Section 2 */}
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center m-20">
          <div className="">
            <img src="/second.png" alt="logo" />
          </div>

          <div className="col-span-2 mx-10">
            <h1 className="font-bold text-[20px] text-center md:text-left md:text-[30px] mb-10">
              Kenapa harus mencari tallent di peworld
            </h1>
            {["Smart", "Full Contribution", "Fast Learnner", "Adaptable"]?.map(
              (item, key) => (
                <div key={key} className="flex gap-2 mb-6">
                  <img src="/tick 1.png" />
                  <p>{item}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {/*End of Section 2 */}

      {/*Section 3 */}
      <div className="container mx-auto mt-20 d-dekstop">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center m-20">
          <div className="content-text order-last md:order-first md:col-span-2">
            <h1 className="h1 mb-5 md:px-40">Skill Tallent</h1>
            <p className="mb-6 md:px-40 text-justify">
              Talent belajar coding dengan kurikulum industri secara intensif
              yang diajarkan langsung oleh mentor berkompeten di bidangnya.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                {["Java.", "Kotlin", "PHP", "Javascript"]?.map((item, key) => (
                  <div key={key} className="flex gap-4 mb-6 md:mx-40">
                    <img src="/tick2.png" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div>
                {["Golang.", "C++", "Ruby", "10 Bahasa Lainnya"]?.map(
                  (item, key) => (
                    <div key={key} className="flex gap-4 mb-6">
                      <img src="/tick2.png" />
                      <p>{item}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="content-img">
            <img src="/third.png" />
          </div>
        </div>
      </div>

      {/*End of Section 3 */}

      {/*Section 4 CTA */}
      <div className="grid place-items-center mt-20">
        <div className="box-cta border-4 grid grid-cols-1 md:grid-cols-2 items-center md:m-20 p-20">
          <div className="text-[20px] text-white text-center md:text-left md:px-10 md:text-[30px] md:text-white ">
            <p>Menuju Tak Terbatas dan Melampauinya</p>
          </div>
          <div className="grid mt-5 md:grid-cols-1 md:justify-items-end">
          <Link href={'/talent-list'}>
            <button className="border-4 p-2 btn-cta">
              Mulai Dari Sekarang
            </button>
            </Link>
          </div>
        </div>
      </div>
      {/*End of Section 4 */}

      {/*Section Footer*/}
      <Footer />
      {/*End of Section Footer*/}
    </>
  );
}
