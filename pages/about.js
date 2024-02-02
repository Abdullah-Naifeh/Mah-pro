import Image from "next/image";
import Navbar from "@/components/Navbar";
import "@/styles/main.css";
import "tailwindcss/tailwind.css";

export default function about() {
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="col-span-2 row-span-5 bg-neutral-800">1</div>
        <div className="col-span-3 col-start-3">6</div>
        <div className="row-span-4 col-start-3 row-start-2">8</div>
        <div className="col-span-2 col-start-4 row-start-2">9</div>
        <div className="col-span-2 row-span-3 col-start-4 row-start-3">10</div>
      </div>
    </div>
  );
}
