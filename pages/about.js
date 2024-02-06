import Image from "next/image";
import Navbar from "@/components/Navbar";
import "@/styles/main.css";
import "tailwindcss/tailwind.css";
import aboutImg from '../public/aboutImg.jpg';

export default function about() {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="flex flex-col lg:flex-row h-screen">
        <div className=" flex items-end w-full lg:w-2/5 h-screen relative pt-32">
        <Image src={aboutImg} layout="fill" objectFit="cover" quality={100}/>
        <div className="flex items-end justify-start w-[80%] relative border-b-4 border-l-4 h-full mb-12 mx-auto">
          <h1 className="text-white text-4xl ml-4 mb-4">ABOUT ME</h1>
       </div>
        </div>
        <div className="flex flex-col items-center w-[100%] md:w-[80%] max-h-screen overflow-x-hidden">
          <div className="flex flex-col justify-start md:justify-center items-start  px-5 py-8 md:px-24">
            <h5 className="yellowCircle text-[14px] leading-5 font-semibold md:text-[18px]"></h5>
            <h1 className="blueCircle text-[30px] leading-5 font-semibold my-[10px] md:text-[60px] md:leading-[72px] md:font-bold text-[#292929]">I AM M.MAHJOUB</h1>
            <p className="text-[18px] leading-8 text-[#878c9f] font-medium">A SUDANESE INVENTOR</p>
            <button className="border-solid rounded-md bg-[#FFC815] text-[#fff] py-3 px-[22px] text-[13px] leading-5 tracking-[2px] shadow-lg mt-5 hover:bg-black">
              <a>DOWNLOAD CV</a>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
