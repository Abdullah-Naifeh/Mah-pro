import Image from "next/image";
import Navbar from "@/components/Navbar";
import "@/styles/main.css";
import "tailwindcss/tailwind.css";
import resumeImg from "../public/title-2.jpg";
import photo from "../public/myPic.jpg";
import icon from "../assets/icons/agenda.svg";
import cameraIcon from "../assets/icons/camera.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function about() {
  return (
    <div className="overflow-hidden h-screen">
      <Navbar />
      <main className="flex flex-col lg:flex-row h-screen">
        <div className="hidden lg:flex items-end w-full lg:w-2/5 h-screen relative pt-32">
          <Image
            className="object-cover"
            layout="fill"
            src={resumeImg}
            quality={100}
          />
          <div className="flex items-end justify-start w-[80%] relative border-b-4 border-l-4 h-full mb-12 mx-auto">
            <h1 className="text-white text-4xl ml-4 mb-4">MY RESUME</h1>
          </div>
        </div>
        <div className="flex flex-col items-start w-[100%] lg:w-[80%] max-h-screen overflow-x-hidden pt-28 px-5 md:px-12 pb-12 ">
          <div className="mb-9">
            <div className="bg-[#FFC815] text-center max-w-[95px] skew">
              <h5 className="text-[11px] text-[#292929] font-semibold leading-5 tracking-[3px] ">
                HISTORY
              </h5>
            </div>
            <h2 className="text-[30px] md:text-[45px] text-[#292929] font-bold">
              MY RESUME
            </h2>
          </div>
          <div className="flex">
            <div className="flex flex-col sm:flex-row">
              {/* Experience colmun */}
              <div className="flex flex-col flex-1 px-4">
                <div className="flex flex-1 mb-8 md:mb-0">
                  <div className="flex flex-col">
                    <h3 className="text-[#292929] text-[18px] leading-[25px] font-medium mb-2 md:mb-3">
                      Experience
                    </h3>
                    <div className="border border-b-4 mb-6">
                      <div className="flex flex-col border-b py-3 px-4">
                        <div className="flex">
                          <div className="bg-[#FFC815] rounded-full mr-3 h-7 w-7">
                            <Image src={faBriefcase} />
                          </div>
                          <div className="flex flex-col">
                            <h5 className="text-[16px] text-[#292929] font-medium">
                              Google
                            </h5>
                            <span className="text-[12px] text-[#878c9f] font-normal">
                              OCT 2015 - JUNE 2016
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#878c9f] text-[14px] leading-[25px] font-normal antialiased  text-left py-4 px-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 mb-8 md:mb-0">
                  <div className="flex flex-col">
                    <div className="border border-b-4 mb-6">
                      <div className="flex flex-col border-b py-3 px-4">
                        <div className="flex">
                          <div className="bg-[#FFC815] rounded-full mr-3 h-7 w-7">
                            <Image src={faBriefcase} />
                          </div>
                          <div className="flex flex-col">
                            <h5 className="text-[16px] text-[#292929] font-medium">
                              Google
                            </h5>
                            <span className="text-[12px] text-[#878c9f] font-normal">
                              OCT 2015 - JUNE 2016
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#878c9f] text-[14px] leading-[25px] font-normal antialiased  text-left py-4 px-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* education colmun */}
              <div className="flex flex-col flex-1 px-4">
                <div className="flex flex-1 mb-8 md:mb-0">
                  <div className="flex flex-col">
                    <h3 className="text-[#292929] text-[18px] leading-[25px] font-medium mb-2 md:mb-3">
                      Education
                    </h3>
                    <div className="border border-b-4 mb-6">
                      <div className="flex flex-col border-b py-3 px-4">
                        <div className="flex">
                          <div className="bg-[#FFC815] rounded-full mr-3 h-7 w-7">
                            <Image src={faBriefcase} />
                          </div>
                          <div className="flex flex-col">
                            <h5 className="text-[16px] text-[#292929] font-medium">
                              Google
                            </h5>
                            <span className="text-[12px] text-[#878c9f] font-normal">
                              OCT 2015 - JUNE 2016
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#878c9f] text-[14px] leading-[25px] font-normal antialiased  text-left py-4 px-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 mb-8 md:mb-0">
                  <div className="flex flex-col">
                    <div className="border border-b-4 mb-6">
                      <div className="flex flex-col border-b py-3 px-4">
                        <div className="flex">
                          <div className="bg-[#FFC815] rounded-full mr-3 h-7 w-7">
                            <Image src={faBriefcase} />
                          </div>
                          <div className="flex flex-col">
                            <h5 className="text-[16px] text-[#292929] font-medium">
                              Google
                            </h5>
                            <span className="text-[12px] text-[#878c9f] font-normal">
                              OCT 2015 - JUNE 2016
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[#878c9f] text-[14px] leading-[25px] font-normal antialiased  text-left py-4 px-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* progress section */}
          <div className="mt-8">
            <h2 className="text-[#292929] text-[22px] leading-6 font-semibold">
              MY SKILLS
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row mt-[10px] pt-8 border-t-[1px] border-[#ddd] w-full">
            <div className="flex-1">
              <h2 className="mb-5 text-[#292929] text-[16px] leading-5 font-medium">
                Design skills
              </h2>
              <div className="flex flex-col flex-1 mb-5">
                <label className="mb-[6px] font-medium text-[#333333] leading-4 text-[12px]" for="html">
                  CORAL DRAW
                </label>
                <progress id="html" value="92" max="100">
                  {" "}
                  32%{" "}
                </progress>
              </div>{" "}
              <div className="flex flex-col flex-1 mb-5">
                <label className="mb-[6px] font-medium text-[#333333] leading-4 text-[12px]" for="html">
                  PHOTOSHOP
                </label>
                <progress id="html" value="85" max="100">
                  {" "}
                  32%{" "}
                </progress>
              </div>
              <div className="flex flex-col flex-1 mb-5">
                <label className="mb-[6px] font-medium text-[#333333] leading-4 text-[12px]" for="html">
                  ILLUSTRATOR
                </label>
                <progress id="html" value="82" max="100">
                  {" "}
                  32%{" "}
                </progress>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="mb-5 text-[#292929] text-[16px] leading-5 font-medium">
                Coding skills
              </h2>
              <div className="flex flex-col flex-1 mb-5">
                <label className="mb-[6px] font-medium text-[#333333] leading-4 text-[12px]" for="html">
                  HTML5
                </label>
                <progress id="html" value="92" max="100">
                  {" "}
                  32%{" "}
                </progress>
              </div>{" "}
              <div className="flex flex-col flex-1 mb-5">
                <label className="mb-[6px] font-medium text-[#333333] leading-4 text-[12px]" for="html">
                  CSS3
                </label>
                <progress id="html" value="85" max="100">
                  {" "}
                  32%{" "}
                </progress>
              </div>
              <div className="flex flex-col flex-1 mb-5">
                <label className="mb-[6px] font-medium text-[#333333] leading-4 text-[12px]" for="html">
                  JAVASCRIPT
                </label>
                <progress id="html" value="82" max="100">
                  {" "}
                  32%{" "}
                </progress>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
