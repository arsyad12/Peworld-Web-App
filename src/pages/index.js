import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* header */}
      <div className="container mx-auto mt-6">
        <div className="flex justify-between">
          <img src="/logo_grape.png" alt="logo" />

          <div className="flex gap-3">
            <button class="p-1 rounded border-4 btn-signin w-1/2">Masuk</button>
            <button class="p-1 rounded border-4 btn-signup w-1/2">Daftar</button>
          </div>
        </div>
      </div>

      {/*end of header */}

      {/*Section 1 */}

      <div className="container mx-auto mt-20">
        <div className="grid  grid-cols-1 md:grid-cols-3 items-center m-20">
          <div className="col-span-2">
            <h1 className="h1 mb-8">
              Talenta terbaik negri untuk perubahan revolusi 4.0
            </h1>
            <p>
              Peworld adalah web apps yang bertujuan untuk
              membantu kamu mendapatkan talent yang berkompeten di bidang teknologi.
              Melalui web, kamu berkesempatan untuk menemukan talent yang dilatih langsung
              dengan mentor yang kompeten di bidangnya.
            </p>
            <button class="p-2 rounded border-4 mt-10 btn-start mb-10">
              Mulai Dari Sekarang
            </button>
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
                <div key={key} className="flex gap-4 mb-6">
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
          <div className="content-text col-span-2">
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
            <button className="border-4 p-2 btn-cta">
              Mulai Dari Sekarang
            </button>
          </div>
        </div>
      </div>
      {/*End of Section 4 */}

      <div className="footer mt-20 grid grid-cols-1">
        <div className="px-10 pt-10">
          <img src="/logo_white.png" alt="logowhite" />
          <p className="pt-10 p-footer">
            Jl. Yos Sudarso No.KM. 8, Umban Sari, Kec. Rumbai, Kota Pekanbaru,
            Riau 28266
          </p>
          <hr className="mt-10" />
        </div>

        <div className=" grid grid-cols-2 mb-20">
          <div className="px-10 pt-10">
            <p className="p-footer">2020 Pewworld. All right reserved</p>
          </div>
          <div className="flex justify-end gap-10 pr-10 pt-10">
            <p className="p-footer">Telepon</p>
            <p className="p-footer">Email</p>
            
          </div>
        </div>
      </div>
    </>
  );
}
