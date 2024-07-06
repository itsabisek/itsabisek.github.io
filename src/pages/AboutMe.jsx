import { useInView } from "react-intersection-observer";

const AboutMe = () => {

    const { ref: content, inView: contentVisible } = useInView({ threshold: 0.5, triggerOnce: true });
    const { ref: divider, inView: dividerVisible } = useInView({ threshold: 0.5, triggerOnce: true })
    const { ref: titleText, inView: titleTextVisble } = useInView({ threshold: 0.5, triggerOnce: true })

    return (
        <div id="About" className="grid lg:grid-cols-4 gap-10 lg:justify-around items-center lg:p-44 p-12 bg-primaryBg text-whiteBg min-h-screen">
            <div className="flex overflow-hidden lg:flex-row flex-col lg:h-full w-full justify-start lg:items-center items-start">
                <div ref={titleText} className={`flex-col lg:p-6 p-2 ${titleTextVisble ? 'animate-in fade-in-0 lg:duration-1000' : 'opacity-0'}`}>
                    <h1 className="text-2xl lg:text-4xl">who</h1>
                    <h1 className="text-3xl lg:text-6xl font-bold">AM I?</h1>
                </div>
                <div ref={divider} className={`lg:w-0 lg:h-full w-full lg:border-r border-t border-neonBg lg:mx-8 my-4 ${dividerVisible ? 'animate-in zoom-in-0 lg:duration-1000' : 'opacity-0'}`}></div>
            </div>
            <div ref={content} className={`lg:col-span-3 grid lg:grid-rows-3 gap-8 justify-center items-center ${contentVisible ? 'animate-in fade-in-0 lg:duration-1000' : 'opacity-0'}`}>
                <div className="grid lg:grid-cols-3 items-center gap-6 ">
                    <div className={`group hover:scale-110 duration-300 overflow-hidden flex flex-col justify-center items-center h-full w-full text-center border-2 border-neonBg bg-neonBg hover:bg-whiteBg rounded-3xl p-4`}>
                        <div className="absolute opacity-100 group-hover:opacity-0 group-hover:duration-75 duration-300">
                            <h1 className="text-2xl font-bold mb-2">4+ years</h1>
                        </div>
                        <div className="text-primaryBg">
                            <h1 className="text-2xl font-bold mb-2 opacity-0 group-hover:animate-in group-hover:slide-in-from-bottom-1/3 group-hover:opacity-100 duration-300">4+</h1>
                            <p className="opacity-0 group-hover:animate-in group-hover:ease-in-out group-hover:slide-in-from-top-1/3 group-hover:opacity-100 duration-300">years experience developing and testing software solutions</p>
                        </div>

                    </div>
                    <div className={`group hover:scale-110 duration-300 flex flex-col justify-center items-center overflow-hidden  h-full w-full text-center border-2 border-neonBg bg-neonBg hover:bg-whiteBg rounded-3xl p-4`}>
                        <div className="absolute opacity-100 group-hover:opacity-0 group-hover:duration-75 duration-300">
                            <h1 className="text-2xl font-bold mb-2">10+ tools</h1>
                        </div>
                        <div className="text-primaryBg">
                            <h1 className="text-2xl font-bold mb-2 opacity-0 group-hover:animate-in group-hover:slide-in-from-bottom-1/3 group-hover:opacity-100 duration-300">10+</h1>
                            <p className="opacity-0 group-hover:animate-in group-hover:ease-in-out group-hover:slide-in-from-top-1/3 group-hover:opacity-100 duration-300">tools and frameworks including Python, GCP, MySQL and Rest APIs</p>
                        </div>
                    </div>
                    <div className={`group hover:scale-110 duration-300 flex-col flex justify-center items-center overflow-hidden  h-full w-full text-center border-2 border-neonBg bg-neonBg hover:bg-whiteBg rounded-3xl p-4`}>
                        <div className="absolute opacity-100 group-hover:opacity-0 group-hover:duration-75 duration-300">
                            <h1 className="text-2xl font-bold mb-2">Newcastle University</h1>
                        </div>
                        <div className="text-primaryBg">
                            <h1 className="text-2xl font-bold mb-2 opacity-0 group-hover:animate-in group-hover:slide-in-from-bottom-1/3 group-hover:opacity-100 duration-300">Newcastle University</h1>
                            <p className="opacity-0 group-hover:animate-in group-hover:ease-in-out group-hover:slide-in-from-top-1/3 group-hover:opacity-100 duration-300">Graduated in MSc Advanced Computer Science with Distinction</p>
                        </div>
                    </div>
                </div>
                <div className="row-span-2 h-auto w-full text-justify">
                    <p> Hi there! I am Abisek. I bring with me over 4 years of experience wrangling code, debugging those annoying production bugs, and optimising awesome software applications to be even more awesome. It's not just all words though; I can pull one-liner codes in Python, join a couple of tables using MySQL, save some bucks using Cloud Services, and make some good APIs quickly with REST. All in all, I have made everyone feel satisfied with my results.
                    </p><br />
                    <p>
                        By the end of 2023, I made it through my MSc degree while putting my skills to use and gaining some knowledge along the way. I like driving problems to their solutions and making things tick. However, I also understand that sometimes the elegant way is not the best, and try to keep a balance between building, within the deadline, a conventional solution that works and one that's the most perfect this world has ever seen. At present, I am open to working in Software Development roles that would tickle my brain and with a team who are building the future, a line of code at a time, and... encourage coffee breaks. Hope to get in touch with you soon!!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;