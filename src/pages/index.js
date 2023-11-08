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
            {[
              "Fastresponse.",
              "Smart",
              "Full Contribution",
              "Fast Learnner",
              "Adaptable",
            ]?.map((item, key) => (
              <div key={key} className="flex gap-4 mb-6">
                <img src="/tick 1.png" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*End of Section 2 */}

      
    </>
  );
}
