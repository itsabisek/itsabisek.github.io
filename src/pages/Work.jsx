import { useInView } from "react-intersection-observer";
import shape from '../assets/icons/shape.png';
import mf from '../assets/icons/mf.png';
import wipro from '../assets/icons/wipro.svg';
import reveela from '../assets/icons/reveela.ico';

const Work = () => {

    const { ref: content, inView: contentVisible } = useInView({ threshold: 0.5, triggerOnce: true })
    const { ref: divider, inView: dividerVisible } = useInView({ threshold: 0.5, triggerOnce: true })
    const { ref: titleText, inView: titleTextVisble } = useInView({ threshold: 0.5, triggerOnce: true })

    return (
        <div id="Work" className="grid lg:grid-cols-4 gap-10 lg:justify-around items-center lg:p-44 p-12 bg-primaryBg text-whiteBg min-h-screen">
            <div className="flex overflow-hidden lg:flex-row flex-col lg:h-full w-full justify-start lg:items-center items-start">
                <div ref={titleText} className={`flex-col lg:p-6 p-2 ${titleTextVisble ? 'animate-in fade-in-0 lg:duration-1000' : 'opacity-0'}`}>
                    <h1 className="text-2xl lg:text-4xl">what did</h1>
                    <h1 className="text-3xl lg:text-6xl font-bold">I DO?</h1>
                </div>
                <div ref={divider} className={`lg:w-0 lg:h-full w-full lg:border-r border-t border-neonBg lg:mx-8 my-4 ${dividerVisible ? 'animate-in zoom-in-0 lg:duration-1000' : 'opacity-0'}`}></div>
            </div>
            <div ref={content} className={`lg:col-span-3 grid grid-row-4 gap-10 ${contentVisible ? 'animate-in fade-in-0 lg:duration-1000' : 'opacity-0'}`}>
                <WorkExperienceList />
            </div>
        </div>
    )
};

const WorkExperienceList = () => {
    const workExperience = [
        {
            company: "Reveela",
            position: "Full Stack Software Engineer",
            logo: reveela,
            description: "Trying to make a difference with AI assisted digital content publishing and marketing, one article at a time"
        },
        {
            company: "Shape Technical Consulting",
            position: "Software Developer",
            logo: shape,
            description: "Gained some usefull dart skills while developing features for a Web Application built with Flutter, Amazon Web Services and Python"
        },
        {
            company: "Mindfire Solutions",
            position: "Software Developer",
            logo: mf,
            description: "Improved Search Engine ranks for businesses using insights aggregated from massive amounts of website data using Python, Google Cloud Platform and MySQL; all distributed using microservices"
        },
        {
            company: "Wipro",
            position: "Software Developer in Test",
            logo: wipro,
            description: "Formulated test plans and executed test cases for detecting, understanding and reporting defects and meet quality standards for incremental updates of a global product with several end-users"
        }
    ];

    return (
        <>
        {
            workExperience.map((we, index) => (
                <div key={index} className={`hover:bg-whiteBg hover:text-primaryBg hover:scale-110 duration-300 delay-0 group flex-col overflow-hidden text-start border-neonBg bg-neonBg border-2 rounded-3xl p-12`}>
                    <div className="flex items-start justify-start">
                        <img src={we.logo} className="mr-1 h-0 w-0 group-hover:h-10 group-hover:w-10 duration-300" alt="logo"></img>
                        <div className="flex flex-col items-start">
                            <p className="text-sm">{we.position}</p>
                            <p className="text-lg font-bold mb-2">{we.company}</p>
                        </div>
                    </div>
                    <p>{we.description}</p>
                </div>
            ))
        }
        </>

    );
}

export default Work;