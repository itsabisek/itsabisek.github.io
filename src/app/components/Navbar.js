"use client";

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
            link: "Home"
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: "Work"
        },
        {
            id: 4,
            link: "Skills"
        },
    ]

    return (<div>
        <nav className="bg-primaryBg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-white">
                            ABISEK
                        </a>
                    </div>
                    <ul className="hidden md:flex h-full">
                        {links.map(({ id, link }) => (
                            <li key={id}>
                                <div className="group relative flex items-center h-full space-x-1">
                                    <a href="/" className="text-white group-hover:text-secondaryBg p-2">
                                        {link}
                                    </a>
                                    <div className="absolute bottom-0 left-0 right-0 bg-secondaryBg h-0 transition-all duration-300 overflow-hidden group-hover:h-0.5"></div>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
            <div className="bottom-0 left-0 right-0 bg-[#d4c2ac] h-0.5 transition-all duration-300 overflow-hidden"></div>
        </nav>
    </div>);

};

export default Navbar;