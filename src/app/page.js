import Image from "next/image";
import Navbar from "./components/Navbar";
import Story from "./components/Story";

export default function Home() {
  return (
    <div className="bg-primaryBg min-h-screen flex flex-col font-hack font-bold">
      <Navbar />
      <Story />
    </div>
  );
}
