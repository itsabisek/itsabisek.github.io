import { useState, useEffect } from "react";
import top from "../assets/icons/top.png";

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
        <a href="#Story" className={`fixed bottom-4 right-4 ${!isScroll ? 'transition opacity-0 duration-200' : 'transition opacity-100 duration-200'}`}>
            <img src={top} className="mr-2 h-12 w-12 transform hover:scale-125 duration-150 ease-linear" alt="top"></img>
        </a>
    )

}

export default BackToTop;