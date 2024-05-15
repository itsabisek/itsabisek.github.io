import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick)
    };

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
        <nav className="fixed top-0 left-0 w-full shadow-md bg-primaryBg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="font-bold text-2xl">
                            ABISEK
                        </a>
                    </div>
                    <div className="grid grid-cols-5 justify-between h-full">
                        {links.map(({ id, link }) => (
                            <div className="group cursor-pointer relative flex justify-center items-center">
                                <Link href={`#${link}`} className="group-hover:text-secondaryBg p-1">{link}</Link>

                                <div className="absolute h-0 bottom-0 left-0 right-0 bg-secondaryBg transition-all duration-500 overflow-hidden group-hover:h-0.5"></div>
                            </div>
                        ))}

                    <div className="flex cursor-pointer justify-center items-center border-secondaryBg border-2 text-secondaryBg hover:text-primaryBg duration-500 hover:bg-secondaryBg transition ease-in-out rounded-full p-2 my-3 mx-1 text-sm">
                        <a target="_blank" href="../../../cv/Abisek-Mishra-Resume-Software-Developer.pdf">Download CV</a>
                    </div>

                    </div>
                </div>
            </div>
        </nav>);

};

export default Navbar;