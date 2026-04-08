import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative bg-white p-3 sm:p-4">
      <div className="relative max-w-[1440px] mx-auto bg-black min-h-[650px] sm:min-h-[700px] rounded-[32px] sm:rounded-[60px] overflow-hidden">

        {/* ================= NAVBAR ================= */}
        <nav className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-4 sm:px-6 py-4">
          {/* Logo */}
        <div className="  rounded-full relative left-0">
            <div className="bg-[#71AC16] p-3 rounded-full">
            <div className="grid grid-cols-2 gap-1 w-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-2 h-2 bg-white rounded-full" />
              ))}
            </div>
          </div>
        </div>

          {/* Menu (hide on mobile) */}
          <div className="hidden lg:flex items-center gap-6 border border-gray-600 rounded-full px-6 py-2 bg-black/40 backdrop-blur-md">
            <Link href="/" className="text-white hover:text-[#71AC16]">
              Home
            </Link>
            <Link href="/" className="text-white hover:text-[#71AC16]">
              Our gym location
            </Link>
            <span className="text-gray-500">|</span>
            <div className="flex items-center gap-2 bg-gray-800 rounded-full px-3 py-1">
              <input
                placeholder="Search"
                className="bg-transparent text-sm outline-none w-24 text-white"
              />
              🔍
            </div>
          </div>

          {/* Register */}
          <Link
            href="/register"
            className="bg-[#71AC16] text-black font-bold px-6 sm:px-10 py-2.5 rounded-full hover:scale-105 transition"
          >
            REGISTER
          </Link>
        </nav>

        {/* ================= MAIN ================= */}
        <div className="flex flex-col lg:flex-row min-h-[650px] sm:min-h-[700px]">

          {/* ========== IMAGE SECTION (TOP ON MOBILE) ========== */}
          <div className="relative w-full lg:w-3/4 h-[320px] sm:h-[420px] lg:h-auto order-1 lg:order-2">
            <Image
              src="/hero-image.png"
              alt="Gym Power"
              fill
              priority
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* HERO TEXT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
              <h1
                className="text-[32px] sm:text-[56px] lg:text-[96px] font-black uppercase leading-[0.9]"
                style={{ WebkitTextStroke: "2px white", color: "transparent" }}
              >
                POWER YOUR <br />
                <span>POTENTIAL</span>
              </h1>

              <div className="flex gap-4 mt-6">
                <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
                  SHOP NOW →
                </button>
                <button className="border border-white p-3 rounded-xl text-white hover:bg-white hover:text-black transition">
                  📍
                </button>
              </div>
            </div>
          </div>

          {/* ========== LEFT SPECIALTY ========== */}
          <div className="relative w-full lg:w-1/4 p-6 flex flex-col justify-end order-2 lg:order-1">

            {/* Social */}
            <div className="text-white mb-6">
              <p className="text-sm">Follow On:</p>
              <div className="flex gap-4 mt-2 text-lg">
                <FaFacebookF />
                <FaInstagram />
                <FaXTwitter />
                <FaLinkedinIn />
              </div>
            </div>

            {/* SHAPE */}
            <div className="relative ">
              <div className="w-[260px] h-[420px] bg-white rounded-tr-[180px]
               ">
                <div className="absolute left-3 bottom-3 w-[230px] h-[390px] bg-[#71AC16]
                 rounded-tr-[200px] 
                 rounded-tl-[40px]
                 rounded-bl-[70px]
                  rounded-br-[40px]
                   overflow-hidden">

                  {/* dots */}
                  <div className="absolute top-6 left-6 grid grid-cols-4 gap-3 opacity-30">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <span key={i} className="w-3 h-1 bg-white rounded-full" />
                    ))}
                  </div>

                  {/* content */}
                  <div className="absolute bottom-6 left-4 right-4 space-y-3">
                    <h3 className="text-white font-extrabold uppercase italic text-lg">
                      Our Specialty
                    </h3>
                    <SpecialtyItem icon="🏃" text="Ground running" />
                    <SpecialtyItem icon="🧘" text="Yoga Assistance" />
                    <SpecialtyItem icon="🏋️" text="Personal Trainer" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function SpecialtyItem({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3 bg-white/20 p-3 rounded-2xl border border-white/30 text-white">
      <span className="bg-white/40 p-2 rounded-lg">{icon}</span>
      <span className="font-semibold text-sm">{text}</span>
    </div>
  );
}