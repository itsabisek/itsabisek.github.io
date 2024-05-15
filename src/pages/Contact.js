import linkedin from "../assets/icons/linkedin.png"
import location from "../assets/icons/location.png"
import email from "../assets/icons/email.png"

const Contact = () => {

    return (
        <div id="Contact" className="grid lg:grid-cols-4 gap-10 lg:justify-around lg:mb-52 items-center lg:p-44 p-12">
            <div className="flex overflow-hidden lg:flex-row flex-col lg:h-full w-full justify-start lg:items-center items-start">
                <div className="flex-col lg:p-6 p-2">
                    <h1 className="text-4xl">get in</h1>
                    <h1 className="text-6xl font-bold">TOUCH</h1>
                </div>
                <div className="lg:w-0 lg:h-full w-full lg:border-r border-t border-secondaryBg lg:mx-8 my-4"></div>
            </div>
            <a href="https://maps.app.goo.gl/LNnWfG3R5898BhnT7" target="_blank" rel="noopener noreferrer" cla>
                <div className="flex-col overflow-hidden text-center border-2 border-secondaryBg bg-boxBg rounded-3xl p-10 transform hover:scale-110 duration-300">
                    <div className="flex justify-center mb-4">
                        <img src={location} className="h-12 w-12" alt="email"></img>
                    </div>
                    <p>London, United Kingdom</p>
                </div>
            </a>
            <a href="mailto:abisekmishra2@gmail.com" target="_blank" rel="noopener noreferrer" className="btn">
                <div className="cursor-pointer flex-col overflow-hidden text-center border-2 border-secondaryBg bg-boxBg rounded-3xl p-10 transform hover:scale-110 duration-300">
                    <div className="flex justify-center mb-4">
                        <img src={email} className="h-12 w-12" alt="email"></img>
                    </div>
                    <p>abisekmishra2@gmail.com</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/abisekmishra" target="_blank" rel="noopener noreferrer">
                <div className="overflow-hidden flex-col text-center border-2 border-secondaryBg bg-boxBg rounded-3xl p-10 transform hover:scale-110 duration-300">
                    <div className="flex justify-center mb-4">
                        <img src={linkedin} className="h-12 w-12" alt="email"></img>
                    </div>
                    <p>Abisek Mishra</p>
                </div>
            </a>
        </div>
    )
}

export default Contact;