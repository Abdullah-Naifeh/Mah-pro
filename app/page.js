import Image from "next/image";
import Navbar from "@/components/Navbar";
import img from "@/public/person.png"
import "@/styles/main.css"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="flex flex-col lg:flex-row h-screen">
        <div className=" flex items-end w-full lg:w-2/5 bg-[#3CB2C9] min-h-full ">
          <Image className="mx-auto" src={img} alt="the website owner image" style={{ width: "auto", height: "75%" }} ></Image>
        </div>
        <div className="flex justify-center w-[100%] md:w-[70%]">
          <div className="flex flex-col justify-start md:justify-center items-start  px-5 py-8 md:px-24 w-full">
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
