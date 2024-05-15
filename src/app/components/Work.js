const Work = () => {
    // Define your work experiences
    const workExperiences = [
        { key: 1, desg: "Software Developer", organization: "Shape Technical Consulting", year: "Jan 2023 - Sept 2023", experience: ["Developed reusable features for a Web Application built with Flutter and AWS/Python"] },
        { key: 2, desg: "Software Developer", organization: "Mindfire Solutions", year: "Sept 2019 - July 2022", experience: ["Optimised a leading SEO platform, improving presence of businesses using insights from website data"] },
        { key: 3, desg: "Test Engineer", organization: "Wipro", year: "May 2018 - Sept 2019", experience: ["Formulated test plans for understanding defects and meet quality standards"] }
    ];

    return (
        <div id="Work" className="grid lg:grid-cols-4 gap-10 lg:justify-around items-center lg:p-44 p-12 auto-cols-fr">
            <div className="flex overflow-hidden lg:flex-row flex-col lg:h-full w-full justify-start lg:items-center items-start">
                <div className="flex-col lg:p-1 p-2">
                    <h1 className="text-4xl">where did I</h1>
                    <h1 className="text-6xl font-bold">WORK?</h1>
                </div>
                <div className="lg:w-0 lg:h-full w-full lg:border-r border-t border-secondaryBg lg:mx-8 my-4"></div>
            </div>
            <div className="col-span-3 grid grid-row-3 gap-10">
                <div className="flex-col overflow-hidden text-start border-secondaryBg border-2 rounded-e-3xl p-12">
                    <p className="text-sm">Software Developer</p>
                    <p className="text-lg font-bold mb-2">Shape Technical Consulting</p>
                    <p>Developed reusable features for a Web Application built with Flutter and AWS/Python</p>
                </div>
                <div className="flex-col overflow-hidden text-start border-2 border-secondaryBg rounded-e-3xl p-12">
                <p className="text-sm">Software Developer</p>
                    <p className="text-lg font-bold mb-2">Mindfire Solutions</p>
                    <p className="text-base">Optimised a leading SEO platform, improving presence of businesses using insights from website data</p>
                </div>
                <div className="overflow-hidden text-start flex-col border-2 border-secondaryBg rounded-e-3xl p-12">
                <p className="text-sm">Test Engineer</p>
                    <p className="text-lg font-bold mb-2">Wipro</p>
                    <p>Formulated test plans for understanding defects and meet quality standards</p>
                </div>
                </div>
        </div>

        // <div className="flex flex-grow justify-center items-center p-44 flex-row">
        //     <div className="flex-shrink-0">
        //         <h1 className="text-6xl font-bold mb-4 p-8">&gt;_&nbsp;where did <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I WORK?</h1>
        //     </div>
        //     <div className="border-l border-secondaryBg p-8 flex">
        //         {/* Display organization names on the left */}
        //         <div className="flex flex-col justify-between">
        //             <div className="flex flex-row justify-evenly">
        //             <div className="flex flex-col justify-center items-center">
        //                     <OrganizationBlock
        //                         organization={workExperiences[0].organization}
        //                         desg={workExperiences[0].desg}
        //                         experience={workExperiences[0].experience}
        //                     />
        //                     <div className="w-1 h-24 border-r border-gray-500 mx-8"></div>
        //                 </div>
        //                 <div className="flex flex-col justify-center items-center">
        //                     <OrganizationBlock
        //                         organization={workExperiences[2].organization}
        //                         desg={workExperiences[2].desg}
        //                         experience={workExperiences[2].experience}
        //                     />
        //                     <div className="w-1 h-24 border-r border-gray-500 mx-8"></div>
        //                 </div>
        //             </div>
        //             <div className="w-full h-0 border-t border-gray-500"></div>
        //             <div className="flex flex-col justify-center items-center">
        //                 <div className="w-1 h-24 border-r border-gray-500 mx-8"></div>
        //                 <OrganizationBlock
        //                     organization={workExperiences[1].organization}
        //                     desg={workExperiences[1].desg}
        //                     experience={workExperiences[1].experience}
        //                 />
        //             </div>

        //         </div>
        //     </div>
        // </div>
    )
}

const OrganizationBlock = ({ organization, desg, experience }) => {
    return (
        <div className={`p-4 ${organization == "Mindfire Solutions" ? "w-2/5" : "w-2/3"} flex-col justify-center items-center text-center`}>
            <div className=" text-center">
                <p className="text-m">{desg}</p>
                <p className="text-lg font-bold">{organization}</p>
            </div>
            <div className="mt-4">
                {experience.map((exp, index) => (
                    <p key={index} className="mt-2">{exp}</p>
                ))}
            </div>
        </div>
    );
};

export default Work;