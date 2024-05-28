import { useState } from "react";
import cv from "../assets/Resume-Abisek-Mishra.pdf";
import ham from "../assets/icons/ham.png";
import cross from "../assets/icons/cross.png";

const Hamburger = () => {

    const [isHamOpen, setisHamOpen] = useState(false);

    return (
        <div className={`lg:hidden fixed flex flex-col z-50 top-0 right-0 text-whiteBg ${isHamOpen ? 'bg-primaryBg duration-500' : 'duration-500'}`}>
            <div className="flex justify-end items-center">
                <img src={isHamOpen ? cross : ham} className={`${isHamOpen ? 'h-12 w-12' : 'h-10 w-10'} mt-4 mr-4  animate-in duration-500 zoom-in-0`} alt="ham" onClick={() => setisHamOpen((isHamOpen) => !isHamOpen)}></img>
            </div>
            <ExpandList
                isHamOpen={isHamOpen}
            />
        </div>

    );
}

const ExpandList = ({ isHamOpen }) => {

    const links = [
        {
            id: 1,
            link: "About"
        },
        {
            id: 2,
            link: "Work"
        },
        {
            id: 3,
            link: "Skills"
        },
        {
            id: 4,
            link: "Contact"
        },
    ]

    return (
    <div className={`flex flex-col justify-start items-start  ${isHamOpen ? 'animate-in slide-in-from-right duration-500 fade-in-0 opacity-100 w-screen h-screen' : 'animate-out slide-out-to-right duration-500 fade-out-100 opacity-0 w-0 h-0'} `}>
        {links.map(({ id, link }) => (
            <a href={`#${link}`} className={`flex relative p-8 m-4 justify-center items-center ${isHamOpen ? '' : 'hidden'}`}>
                <p>{link}</p>
            </a>
        ))}

        <div className={`flex cursor-pointer justify-center items-center border-neonBg bg-neonBg border-2 rounded-full p-4 m-10 text-sm ${isHamOpen ? '' : 'hidden'}`}>
            <a target="_blank" rel="noreferrer noopener" href={cv}>Download CV</a>
        </div>

    </div>);
}

export default Hamburger;