import Image from "next/image";
import Navbar from "@/components/Navbar";
import "@/styles/main.css";
import "tailwindcss/tailwind.css";
import aboutImg from "../public/aboutImg.jpg";
import photo from "../public/myPic.jpg";
import rulerIcon from "@icon/themify-icons/icons/ti-ruler-pencil"

export default function about() {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="flex flex-col lg:flex-row h-screen">
        <div className=" flex items-end w-full lg:w-2/5 h-screen relative pt-32">
          <Image
            className="object-cover"
            layout="fill"
            src={aboutImg}
            quality={100}
          />
          <div className="flex items-end justify-start w-[80%] relative border-b-4 border-l-4 h-full mb-12 mx-auto">
            <h1 className="text-white text-4xl ml-4 mb-4">ABOUT ME</h1>
          </div>
        </div>
        <div className="flex flex-col items-start w-[100%] md:w-[80%] max-h-screen overflow-x-hidden pt-28 px-12 pb-12 ">
          <div className="mb-9">
            <div className="bg-[#FFC815] text-center	skew">
              <h5 className="text-[11px] text-[#292929] font-semibold  leading-5 tracking-[3px] ">
                WHO I AM
              </h5>
            </div>
            <h2 className="text-[45px] text-[#292929] font-bold">ABOUT</h2>
          </div>
          <div className="flex">
            <div className="relative pr-8 object-cover min-w-[245px] min-h-[390px]">
              <Image src={photo} quality={100} />
            </div>
            <div className="flex flex-col ">
              <div>
                <h1 className="text-[22px] text-[#292929] font-semibold leading-4">I'm Muhammad Mahjoub</h1>
                <p className="mt-[15px] mb-8 text-[#878c9f] leading-7 font-normal text-base">
                  A Sudanese citizen and inventor who holds two patents in
                  engineering and technology. My interests in educating children
                  began when he entered the university stage, and he was called
                  "the children's inspiration", a title that spread in various
                  media outlets as a result of his invaluable contributions to
                  teaching children programming, robotics, and artificial
                  intelligence.
                </p>
              </div>
              <div className="flex">
                <div className="flex">
                  <div>
                    <Image src={rulerIcon} /> 
                  </div>
                  <div className="flex flex-col">
                  <h3>Development</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                  </div>
                </div>
                <div>graphic</div>
              </div>
              <div className="flex">
                <div>web design</div>
                <div>moile apps</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
