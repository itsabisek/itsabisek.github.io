import { useEffect, useState } from "react";
import cv from "../assets/Resume-Abisek-Mishra.pdf";
import { useInView } from "react-intersection-observer";

const Navbar = () => {

    const {ref: nav, inView: navVisible } = useInView({triggerOnce: true});

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
        <nav ref={nav} className={`text-whiteBg sticky top-0 z-50 left-0 w-full ${isScroll ? 'transition duration-300 shadow-md' : 'transition duration-300 shadow-none'} ${navVisible ? 'animate-in fade-in-0 duration-1000' : 'opacity-0'} bg-greyBg`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="font-hack font-bold text-secondaryBg text-3xl">
                            ABISEK
                        </a>
                    </div>
                    <div className="grid grid-cols-5 justify-between h-auto">
                        {links.map(({ id, link }) => (
                            <a href={`#${link}`} className="group relative flex group-hover:text-neonBg p-1 justify-center items-center">
                                <p>{link}</p>
                                <div className="absolute h-0 bottom-0 left-0 right-0 bg-neonBg transition-all duration-300 overflow-hidden group-hover:h-0.5"></div>
                            </a>
                        ))}

                        <div className="flex cursor-pointer justify-center items-center border-neonBg border-2 duration-300 hover:bg-neonBg transition ease-in-out rounded-full p-2 my-3 mx-1 text-sm">
                            <a target="_blank" rel="noreferrer noopener" href={cv}>Download CV</a>
                        </div>

                    </div>
                </div>
            </div>
        </nav>);

};

export default Navbar;