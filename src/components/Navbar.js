import { useEffect, useState } from "react";
import cv from "../assets/Abisek-Mishra-Resume-Software-Developer.pdf";

const Navbar = () => {

    const [isScroll, setisScroll] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 10 ? setisScroll(true) : setisScroll(false)
        };

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);

    }, [isScroll])

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
        <nav className={`sticky top-0 z-50 left-0 w-full ${isScroll ? 'transition duration-300 shadow-md' : 'transition duration-300 shadow-none'} bg-primaryBg`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="font-bold text-2xl">
                            ABISEK
                        </a>
                    </div>
                    <div className="grid grid-cols-5 justify-between h-auto">
                        {links.map(({ id, link }) => (
                            <div className="group cursor-pointer relative flex justify-center items-center">
                                <a href={`#${link}`} className="group-hover:text-secondaryBg p-1">{link}</a>

                                <div className="absolute h-0 bottom-0 left-0 right-0 bg-secondaryBg transition-all duration-300 overflow-hidden group-hover:h-0.5"></div>
                            </div>
                        ))}

                        <div className="flex cursor-pointer justify-center items-center border-secondaryBg border-2 text-secondaryBg hover:text-primaryBg duration-500 hover:bg-secondaryBg transition ease-in-out rounded-full p-2 my-3 mx-1 text-sm">
                            <a target="_blank" href={cv}>Download CV</a>
                        </div>

                    </div>
                </div>
            </div>
        </nav>);

};

export default Navbar;