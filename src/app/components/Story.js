import Link from "next/link";

const Story = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-col">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                        <img className=" h-72 w-72 rounded-full object-cover" src="photo.jpeg" alt="Abisek Mishra" />
                    </div>

                    {/* Name and designation */}
                    <div className="flex-grow flex flex-col mt-12 font-Hack">
                        <p className=" text-gray-700 font-Hack text-xl">&gt;_ HI THERE!</p>
                        <p className="font-bold text-gray-900 font-Hack text-6xl">I'm Abisek Mishra</p>
                        <p className="text-gray-700 font-Hack text-2xl">A SOFTWARE DEVELOPER</p>

                        <div className="flex justify-center mt-12">
                            <div className="cursor-pointer rounded-full hover:bg-primaryBg transition ease-in-out duration-500 bg-secondaryBg border-2 border-secondaryBg text-blue-500 py-2 px-4 mx-2">
                                <Link href="#Contact">Contact Me!</Link>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-2 justify-center">
                        <div className='flex items-center justify-center flex-row'>
                                    <p className="mr-2 text-l">Also check my</p>
                                    <div className="h-0 w-40 border-t-2 border-secondaryBg my-4"></div>
                            <div className={'flex ml-2 flex-row icons-container'}>
                                <a href="https://github.com/itsabisek" target="_blank" rel="noopener noreferrer" className="btn">
                                    <img src="github.png" className="mr-2 h-8 w-8 transform hover:scale-125" alt="github"></img>
                                </a>
                                <a href="https://linkedin.com/in/abisekmishra" target="_blank" rel="noopener noreferrer" className="btn">
                                    <img src="linkedin.png" className="h-8 w-8 transform hover:scale-125" alt="email"></img>
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