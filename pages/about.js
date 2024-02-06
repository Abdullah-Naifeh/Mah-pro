import Image from "next/image";
import Navbar from "@/components/Navbar";
import "@/styles/main.css";
import "tailwindcss/tailwind.css";
import aboutImg from "../public/aboutImg.jpg";
import photo from '../public/myPic.jpg';


export default function about() {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="flex flex-col lg:flex-row h-screen">
        <div className=" flex items-end w-full lg:w-2/5 h-screen relative pt-32">
          <Image src={aboutImg} layout="fill" objectFit="cover" quality={100} />
          <div className="flex items-end justify-start w-[80%] relative border-b-4 border-l-4 h-full mb-12 mx-auto">
            <h1 className="text-white text-4xl ml-4 mb-4">ABOUT ME</h1>
          </div>
        </div>
        <div className="flex flex-col items-start w-[100%] md:w-[80%] max-h-screen overflow-x-hidden pt-28 px-12 pb-12">
          <div>
            <h5>WHO I AM</h5>
            <h2>ABOUT</h2>
          </div>
          <div className="flex">
            <div className="relative w-[65%]"><Image src={photo} objectFit="cover" quality={100} width={245} height={390}/></div>
            <div className="flex flex-col">
              <div>
                <h1>I'm Alexis Larten</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="flex">
                <div>development</div>
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
