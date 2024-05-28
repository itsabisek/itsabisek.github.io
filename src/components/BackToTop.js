import { useState, useEffect } from "react";
import top from "../assets/icons/top.png";
import top_s from "../assets/icons/top_s.png";

const BackToTop = () => {
    const [isScroll, setisScroll] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 10 ? setisScroll(true) : setisScroll(false)
        };

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);

    }, [isScroll])

    return (
        <a href="#Story" className={`fixed bottom-4 right-0 ${!isScroll ? 'transition opacity-0 duration-200' : 'transition opacity-100 duration-200'}`}>
            <img src={top} className="hidden lg:block mr-8 h-12 w-12 transform hover:scale-125 duration-150 ease-linear" alt="top"></img>
            <img src={top_s} className="lg:hidden opacity-40 h-12 w-12 transform hover:scale-125 duration-150 ease-linear" alt="top_s"></img>
        </a>
    )

}

export default BackToTop;