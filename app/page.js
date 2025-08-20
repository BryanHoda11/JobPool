import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="hero w-full">
        <Image src="/images/hero.webp" fill alt="hero-bg" className="object-cover object-center w-full h-auto relative z-0" />
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        <div className="absolute inset-0 z-20 flex flex-col text-center items-center justify-center text-white px-6">
          <h2 className="text-3xl sm:text-5xl font-semibold">Land your dream career now!</h2>
          <p className="max-sm:text-sm py-5">Find jobs that matches with your skills, profile and interests.</p>

          <Link href='/Jobs'>
            <button className="relative group rounded-lg p-[2px] overflow-hidden cursor-pointer">
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-800 bg-[length:200%_200%] animate-gradient group-hover:animate-gradient-fast"></span>
              <span className="relative block bg-transparent text-white px-6 py-2 rounded-lg">
                Explore Jobs
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
