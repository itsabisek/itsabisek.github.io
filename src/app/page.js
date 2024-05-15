"use client";

import Navbar from "./components/Navbar";
import Story from "./components/Story";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="bg-primaryBg font-sans">
      <Navbar />
      <div className="min-h-screen flex flex-col flex-grow">
        <Story />
        <AboutMe />
        <Work />
        <Skills />
        <Contact />
    </div>
    </div>

  );
}
