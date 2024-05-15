import photo from "../assets/photo.jpeg";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";

const Story = () => {
    return (
        <div id="Story" className="min-h-screen flex flex-col scroll-mt-16">
            <div className="flex-grow flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-col">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                        <img className=" h-72 w-72 rounded-full object-cover" src={photo} alt="Abisek Mishra" />
                    </div>

                    {/* Name and designation */}
                    <div className="flex-grow flex flex-col mt-12 font-Hack">
                        <p className=" text-gray-700 font-Hack text-xl">&gt;_ HI THERE!</p>
                        <p className="font-bold text-gray-900 font-Hack text-6xl">I'm Abisek Mishra</p>
                        <p className="text-gray-700 font-Hack text-2xl">A SOFTWARE DEVELOPER</p>

                        <div className="flex flex-row justify-start mt-12">
                            <div className="cursor-pointer rounded-full hover:bg-primaryBg transition ease-in-out duration-500 bg-secondaryBg border-2 border-secondaryBg text-blue-500 p-4 mr-4">
                                <a href="#Contact">Contact Me!</a>
                            </div>
                            <div className='flex ml-2 items-center'>
                                <a href="https://github.com/itsabisek" target="_blank" rel="noopener noreferrer">
                                    <img src={github} className="mr-2 h-6 w-6 transform hover:scale-125 duration-300" alt="github"></img>
                                </a>
                                <a href="https://linkedin.com/in/abisekmishra" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedin} className="h-6 w-6 transform hover:scale-125 duration-300" alt="email"></img>
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