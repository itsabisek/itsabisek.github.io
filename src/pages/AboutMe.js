import { useInView } from "react-intersection-observer";

const AboutMe = () => {

    const {ref: box1, inView: box1Visible } = useInView({rootMargin: "-100px", triggerOnce: true});
    const {ref: box2, inView: box2Visible } = useInView({rootMargin: "-100px", triggerOnce: true});
    const {ref: box3, inView: box3Visible } = useInView({rootMargin: "-100px", triggerOnce: true});

    const {ref: divider, inView: dividerVisible } = useInView({rootMargin: "-100px", triggerOnce: true})
    const {ref: titleText, inView: titleTextVisble } = useInView({rootMargin: "-100px", triggerOnce: true})

    return (
        <div id="About" className="grid lg:grid-cols-4 gap-10 lg:justify-around items-center lg:p-44 p-12">
            <div className="flex overflow-hidden lg:flex-row flex-col lg:h-full w-full justify-start lg:items-center items-start">
                <div ref={titleText} className={`abisek-start-text flex-col lg:p-6 p-2 ${titleTextVisble ? 'animate-in zoom-in-0 duration-1000' : 'opacity-0'}`}>
                    <h1 className="text-4xl">who</h1>
                    <h1 className="text-6xl font-bold">AM I?</h1>
                </div>
                <div ref={divider} className={`lg:w-0 lg:h-full w-full lg:border-r border-t border-secondaryBg lg:mx-8 my-4 ${dividerVisible ? 'animate-in zoom-in-0 duration-1000' : 'opacity-0'}`}></div>
            </div>
            <div ref={box1} className={`flex-col overflow-hidden  h-full text-center border-2 border-secondaryBg bg-boxBg rounded-3xl ${box1Visible ? 'animate-in fade-in-0 slide-in-from-left-1/3 duration-1000' : 'opacity-0'} p-12`}>
                <h1 className="text-3xl font-bold mb-2">4+</h1>
                <p>years experience developing robust and testing software solutions in collaborative environments</p>
            </div>
            <div ref={box2} className={`flex-col overflow-hidden  h-full text-center border-2 border-secondaryBg bg-boxBg rounded-3xl ${box2Visible ? 'animate-in fade-in-0 slide-in-from-left-1/3 duration-1000 delay-75' : 'opacity-0'} p-12`}>
                <h1 className="text-3xl font-bold mb-2">10+</h1>
                <p className="text-base">tools and frameworks including but not limited to Python, GCP, MySQL and Rest APIs</p>
            </div>
            <div ref={box3} className={`flex-col overflow-hidden  h-full text-center border-2 border-secondaryBg bg-boxBg rounded-3xl ${box3Visible ? 'animate-in fade-in-0 slide-in-from-left-1/3 duration-1000 delay-150' : 'opacity-0'} p-12`}>
                <h1 className="text-3xl font-bold mb-2">Newcastle University</h1>
                <p>Graduated in MSc Advanced Computer Science with Distinction in 2023</p>
            </div>
        </div>
    )
}

export default AboutMe;