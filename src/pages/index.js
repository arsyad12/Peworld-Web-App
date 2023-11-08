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

          <div className="flex gap-10">
            <button class="p-1 rounded border-4 btn-signin">Masuk</button>
            <button class="p-1 rounded border-4 btn-signup">Daftar</button>
          </div>
        </div>
      </div>

      {/*end of header */}

      {/*Section 1 */}

      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-2 items-center">
          <div className="">
            <h1 className="h1 mb-8">
              Talenta terbaik negri untuk perubahan revolusi 4.0
            </h1>
            <p>
              Pijar Camp merupakan program bootcamp yang bertujuan untuk
              membantu kamu dalam meningkatkan kompetensi di bidang teknologi.
              Melalui program ini, kamu berkesempatan untuk dilatih langsung
              dengan mentor yang kompeten di bidangnya.
            </p>
            <button class="p-2 rounded border-4 mt-10 btn-start">
              Mulai Dari Sekarang
            </button>
          </div>
          <img src="/firstpic.png" alt="logo" />
        </div>
      </div>

      {/*End of Section 1 */}

      {/*Section 2 */}
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-2 items-center">
          <div>
            <img src="/second.png" alt="logo" />
          </div>

          <div>
            <h1 className="h1 mb-10">
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
      <div className="container mx-auto mt-20">
        <div className="grid grid-cols-2 items-center">
          <div className="content-text">
            <h1 className="h1 mb-5">Skill Tallent</h1>
            <p className="mb-6">
              Talent belajar coding dengan kurikulum industri secara intensif
              yang diajarkan langsung oleh mentor berkompeten di bidangnya.
            </p>
            <div className="grid grid-cols-2">
              <div>
                {["Java.", "Kotlin", "PHP", "Javascript"]?.map((item, key) => (
                  <div key={key} className="flex gap-4 mb-6">
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

      {/*Section 4 */}
      <div className="container grid place-items-center mt-20">
        <div className="box-cta border-4 grid grid-cols-2 items-center">
          <div className="px-10 text-cta">
            <p>Menuju Tak Terbatas dan Melampauinya</p>
          </div>
          <div className="grid justify-items-end pr-10">
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
