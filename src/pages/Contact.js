import linkedin from "../assets/icons/linkedin.png"
import location from "../assets/icons/location.png"
import email from "../assets/icons/email.png"
import { useInView } from "react-intersection-observer";

const Contact = () => {

    const {ref: content, inView: contentVisible } = useInView({rootMargin: "-200px", triggerOnce: true});
    const {ref: divider, inView: dividerVisible } = useInView({rootMargin: "-200px", triggerOnce: true})
    const {ref: titleText, inView: titleTextVisble } = useInView({rootMargin: "-200px", triggerOnce: true})

    return (
        <div id="Contact" className="grid lg:grid-cols-4 gap-10 lg:justify-around items-center lg:p-44 p-12 bg-primaryBg text-whiteBg min-h-screen">
            <div className="flex overflow-hidden lg:flex-row flex-col lg:h-full w-full justify-start lg:items-center items-start">
                <div ref={titleText} className={`abisek-start-text flex-col lg:p-6 p-2 ${titleTextVisble ? 'animate-in fade-in-0 duration-1000' : 'opacity-0'}`}>
                    <h1 className="text-4xl">get in</h1>
                    <h1 className="text-6xl font-bold">TOUCH</h1>
                </div>
                <div ref={divider} className={`lg:w-0 lg:h-full w-full lg:border-r border-t border-neonBg  lg:mx-8 my-4 ${dividerVisible ? 'animate-in zoom-in-0 duration-1000' : 'opacity-0'}`}></div>
            </div>
            <a href="https://maps.app.goo.gl/LNnWfG3R5898BhnT7" target="_blank" rel="noopener noreferrer">
                <div ref={content} className={`group flex-col overflow-hidden text-center border-2 border-neonBg bg-neonBg hover:bg-whiteBg hover:text-primaryBg rounded-3xl p-10 transform hover:scale-110 duration-300 ${contentVisible ? 'animate-in fade-in-0 duration-1000' : 'opacity-0'}`}>
                    <div className="flex justify-center mb-4">
                        <img src={location} className="h-12 w-12 group-hover:scale-150 duration-300" alt="email"></img>
                    </div>
                    <p>London, United Kingdom</p>
                </div>
            </a>
            <a href="mailto:abisekmishra2@gmail.com" target="_blank" rel="noopener noreferrer">
                <div ref={content} className={`group cursor-pointer flex-col overflow-hidden text-center border-2 border-neonBg bg-neonBg hover:bg-whiteBg hover:text-primaryBg rounded-3xl p-10 transform hover:scale-110 duration-300 ${contentVisible ? 'animate-in fade-in-0 duration-1000' : 'opacity-0'}`}>
                    <div className="flex justify-center mb-4">
                        <img src={email} className="h-12 w-12 group-hover:scale-150 duration-300" alt="email"></img>
                    </div>
                    <p>abisekmishra2@gmail.com</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/abisekmishra" target="_blank" rel="noopener noreferrer">
                <div ref={content} className={`group overflow-hidden flex-col text-center border-2 border-neonBg bg-neonBg hover:bg-whiteBg hover:text-primaryBg  rounded-3xl p-10 transform hover:scale-110 duration-300 ${contentVisible ? 'animate-in fade-in-0 duration-1000' : 'opacity-0'}`}>
                    <div className="flex justify-center mb-4">
                        <img src={linkedin} className="h-12 w-12 group-hover:scale-150 duration-300" alt="email"></img>
                    </div>
                    <p>Abisek Mishra</p>
                </div>
            </a>
        </div>
    )
}

export default Contact;