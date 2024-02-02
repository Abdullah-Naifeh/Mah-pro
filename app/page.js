import Image from "next/image";
import Navbar from "@/components/Navbar";
import img from "@/public/person.png"
import "@/styles/main.css"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="flex flex-col lg:flex-row">
        <div className=" flex w-full lg:w-2/5 bg-[#3CB2C9]">
          <Image className="items-end mx-auto" src={img} width="auto"></Image>
        </div>
        <div className="w-[100%] md:w-[70%]">
          <div className="flex flex-col justify-start md:justify-center items-start md:h-[91vh] px-5 py-8 md:px-24">
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
