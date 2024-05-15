import photo from "../assets/photo.jpeg";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import { useInView } from "react-intersection-observer";

const Story = () => {

    const {ref: pt, inView: ptVisible } = useInView({triggerOnce: true});
    const {ref: cbox, inView: cboxVisible } = useInView({triggerOnce: true});
    const {ref: titleText, inView: titleTextVisible } = useInView({triggerOnce: true});
    const {ref: gt, inView: gtVisible } = useInView({triggerOnce: true});
    const {ref: ln, inView: lnVisible } = useInView({triggerOnce: true});

    return (
        <div id="Story" className="min-h-screen flex flex-col scroll-mt-16">
            <div className="flex-grow flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-col">
                    {/* Photo */}
                    <div ref={pt} className={`flex-shrink-0 ${ptVisible ? 'animate-in zoom-in-0 fade-in-0 duration-700 delay-500' : 'opacity-0'}`}>
                        <img className=" h-72 w-72 rounded-full object-cover" src={photo} alt="Abisek Mishra" />
                    </div>

                    {/* Name and designation */}
                    <div className="flex-grow flex flex-col mt-12 font-Hack">
                        <p ref={titleText} className={`text-gray-700 font-Hack text-xl ${titleTextVisible ? 'animate-in duration-1000 fade-in-0 zoom-in-0 delay-500' : 'opacity-0'}`}>HI THERE!</p>
                        <p ref={titleText} className={`font-bold text-gray-900 font-Hack text-6xl ${titleTextVisible ? 'animate-in duration-1000 fade-in-0 zoom-in-0 delay-500' : 'opacity-0'}`}>I'm Abisek Mishra</p>
                        <p ref={titleText} className={`text-gray-700 font-Hack text-2xl ${titleTextVisible ? 'animate-in duration-1000 fade-in-0 zoom-in-0 delay-500' : 'opacity-0'}`}>A SOFTWARE DEVELOPER</p>

                        <div className="flex flex-row justify-start mt-12">
                            <div ref={cbox} className={`cursor-pointer rounded-full hover:bg-primaryBg transition ease-in-out duration-500 border-4 border-secondaryBg text-white p-4 mr-4 ${cboxVisible ? 'animate-in fade-in-0 bg-secondaryBg text-black duration-500 delay-200 delay-1000' : 'opacity-0'}`}>
                                <a href="#Contact">Contact Me!</a>
                            </div>
                            <div className='flex ml-2 items-center'>
                                <a ref={gt} href="https://github.com/itsabisek" target="_blank" rel="noopener noreferrer" className={`${gtVisible ? 'animate-in slide-in-from-left-1/3 fade-in-0 duration-700 delay-1000' : 'opacity-0' }`}>
                                    <img src={github} className="mr-2 h-6 w-6 transform hover:scale-125 duration-500" alt="github"></img>
                                </a>
                                <a ref={ln} href="https://linkedin.com/in/abisekmishra" target="_blank" rel="noopener noreferrer" className={`${lnVisible ? 'animate-in slide-in-from-left-1/3 fade-in-0 duration-700 delay-1000' : 'opacity-0' }`}>
                                    <img src={linkedin} className="h-6 w-6 transform hover:scale-125 duration-500" alt="email"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story;