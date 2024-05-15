import { useInView } from "react-intersection-observer";

const Work = () => {

    const {ref: box1, inView: box1Visible } = useInView({rootMargin: "-100px", triggerOnce: true});
    const {ref: box2, inView: box2Visible } = useInView({rootMargin: "-100px", triggerOnce: true});
    const {ref: box3, inView: box3Visible } = useInView({rootMargin: "-100px", triggerOnce: true});

    const {ref: divider, inView: dividerVisible } = useInView({rootMargin: "-100px", triggerOnce: true})
    const {ref: titleText, inView: titleTextVisble } = useInView({rootMargin: "-100px", triggerOnce: true})

    // Define your work experiences
    const workExperiences = [
        { key: 1, desg: "Software Developer", organization: "Shape Technical Consulting", year: "Jan 2023 - Sept 2023", experience: ["Developed reusable features for a Web Application built with Flutter and AWS/Python"] },
        { key: 2, desg: "Software Developer", organization: "Mindfire Solutions", year: "Sept 2019 - July 2022", experience: ["Optimised a leading SEO platform, improving presence of businesses using insights from website data"] },
        { key: 3, desg: "Test Engineer", organization: "Wipro", year: "May 2018 - Sept 2019", experience: ["Formulated test plans for understanding defects and meet quality standards"] }
    ];

    return (
        <div id="Work" className="grid lg:grid-cols-4 gap-10 lg:justify-around items-center lg:p-44 p-12 scroll-mt-16">
            <div className="flex overflow-hidden lg:flex-row flex-col lg:h-full w-full justify-start lg:items-center items-start">
                <div ref={titleText} className={`flex-col lg:p-6 p-2 ${titleTextVisble ? 'animate-in zoom-in-0 duration-1000' : 'opacity-0'}`}>
                    <h1 className="text-4xl">what did</h1>
                    <h1 className="text-6xl font-bold">I DO?</h1>
                </div>
                <div ref={divider} className={`lg:w-0 lg:h-full w-full lg:border-r border-t border-secondaryBg lg:mx-8 my-4 ${dividerVisible ? 'animate-in zoom-in-0 duration-1000' : 'opacity-0'}`}></div>
            </div>
            <div className="col-span-3 grid grid-row-3 gap-10">
                <div ref={box1} className={`flex-col overflow-hidden text-start border-secondaryBg bg-boxBg border-2 rounded-e-3xl p-12 ${box1Visible ? 'animate-in fade-in-0 slide-in-from-top-1/3 duration-1000' : 'opacity-0'}`}>
                    <p className="text-sm">Software Developer</p>
                    <p className="text-lg font-bold mb-2">Shape Technical Consulting</p>
                    <p>Developed reusable features for a Web Application built with Flutter and AWS/Python</p>
                </div>
                <div ref={box2} className={`flex-col overflow-hidden text-start border-2 border-secondaryBg bg-boxBg rounded-e-3xl p-12 ${box2Visible ? 'animate-in fade-in-0 slide-in-from-top-1/3 duration-1000 delay-75' : 'opacity-0'}`}>
                    <p className="text-sm">Software Developer</p>
                    <p className="text-lg font-bold mb-2">Mindfire Solutions</p>
                    <p className="text-base">Optimised a leading SEO platform, improving presence of businesses using insights from website data</p>
                </div>
                <div ref={box3} className={`overflow-hidden text-start flex-col border-2 border-secondaryBg bg-boxBg rounded-e-3xl p-12 ${box3Visible ? 'animate-in fade-in-0 slide-in-from-top-1/3 duration-1000 delay-150' : 'opacity-0'}`}>
                    <p className="text-sm">Test Engineer</p>
                    <p className="text-lg font-bold mb-2">Wipro</p>
                    <p>Formulated test plans for understanding defects and meet quality standards</p>
                </div>
            </div>
        </div>
    )
};

export default Work;