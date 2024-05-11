const Story = () => {
    return (
        // <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center flex-col">
                {/* Photo */}
                <div className="flex-shrink-0">
                    <img className=" h-72 w-72 rounded-full object-cover" src="photo.jpeg" alt="Abisek Mishra" />
                </div>

                {/* Name and designation */}
                <div className="flex-grow flex flex-col mt-12 font-Hack">
                    <p className="text-xl text-gray-700 font-Hack text-xl">&gt;_ HI THERE!</p>
                    <p className="text-3xl font-bold text-gray-900 font-Hack text-6xl">I'm Abisek Mishra</p>
                    <p className="text-xl text-gray-700 font-Hack text-2xl">A SOFTWARE DEVELOPER</p>

                    <div className="flex justify-center mt-12">
                        <button className="bg-accentBg border border-accentBg text-blue-500 hover:bg-secondaryBg hover:text-white font-bold py-2 px-4 mx-2 rounded-md">
                            Here's my CV
                        </button>
                        <button className="bg-accentBg border border-accentBg text-blue-500 hover:bg-secondaryBg hover:text-white font-bold py-2 px-4 mx-2 rounded-md">
                        Contact Me!
                        </button>
                    </div>

                    {/* Also Check my section */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-start px-8 py-4">
                        <div className="flex items-center">
                            <p className="mr-2 text-xl">Also check my</p>

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-40" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1">
                                <line x1="-40" y1="10" x2="60" y2="10" />
                            </svg>
                        </div>
                        <div className="flex items-center">
                            <a href="https://github.com/itsabisek" target="_blank" rel="noopener noreferrer" class="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 ml-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0a12 12 0 00-3.819 23.36c.605.112.828-.262.828-.582l-.012-2.044c-3.37.734-4.168-1.617-4.168-1.617-.563-1.427-1.373-1.81-1.373-1.81-1.122-.755.084-.738.084-.738 1.241.087 1.895 1.274 1.895 1.274 1.104 1.893 2.898 1.346 3.61 1.027.112-.797.433-1.345.787-1.651-2.75-.307-5.645-1.373-5.645-6.111 0-1.352.484-2.454 1.274-3.316-.127-.31-.553-1.57.122-3.276 0 0 1.037-.332 3.4 1.266a11.82 11.82 0 013.073-.418c1.04.003 2.096.14 3.073.418 2.361-1.598 3.396-1.266 3.396-1.266.677 1.706.25 2.966.123 3.276.794.862 1.274 1.964 1.274 3.316 0 4.749-2.898 5.8-5.654 6.1.445.384.842 1.138.842 2.289l-.013 3.412c0 .323.22.696.838.58A12 12 0 0012 0z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com/in/abisekmishra" target="_blank" rel="noopener noreferrer" class="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 ml-2" viewBox="0 0 48 48">
                                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //   </div>
    )
}

export default Story;