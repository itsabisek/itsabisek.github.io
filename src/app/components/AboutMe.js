import Image from "next/image";

const AboutMe = () => {

    return (
        <div id="About" className="grid lg:grid-cols-4 gap-10 lg:justify-around items-center lg:p-44 p-12 auto-cols-fr">
            <div className="flex overflow-hidden lg:flex-row flex-col lg:h-full w-full justify-start lg:items-center items-start">
                <div className="flex-col lg:p-8 p-2">
                    <h1 className="text-4xl">who</h1>
                    <h1 className="text-6xl font-bold">AM I?</h1>
                </div>
                <div className="lg:w-0 lg:h-full w-full lg:border-r border-t border-secondaryBg lg:mx-8 my-4"></div>
            </div>
                <div className="flex-col overflow-hidden  h-full text-center border-2 border-secondaryBg rounded-3xl p-12">
                    <h1 className="text-3xl font-bold mb-2">4+</h1>
                    <p>years experience developing robust and testing software solutions in collaborative environments</p>
                </div>
                <div className="flex-col overflow-hidden  h-full text-center border-2 border-secondaryBg rounded-3xl p-12">
                    <h1 className="text-3xl font-bold mb-2">10+</h1>
                    <p className="text-base">tools and frameworks including but not limited to Python, GCP, MySQL and Rest APIs</p>
                </div>
                <div className="h-full overflow-hidden flex-col text-center border-2 border-secondaryBg rounded-3xl p-12">
                    <h1 className="text-3xl font-bold mb-2">Newcastle University</h1>
                    <p>Graduated in MSc Advanced Computer Science with Distinction in 2023</p>
                </div>
        </div>
    )
}

export default AboutMe;