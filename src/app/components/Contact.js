const Contact = () => {

    return (
        <div id= "Contact" className="grid lg:grid-cols-4 gap-10 lg:justify-around items-center lg:p-44 p-12 auto-cols-fr">
            <div className="flex overflow-hidden lg:flex-row flex-col lg:h-full w-full justify-start lg:items-center items-start">
                <div className="flex-col lg:p-8 p-2">
                    <h1 className="text-4xl">contact</h1>
                    <h1 className="text-6xl font-bold">ME</h1>
                </div>
                <div className="lg:w-0 lg:h-full w-full lg:border-r border-t border-secondaryBg lg:mx-8 my-4"></div>
            </div>
                <div className="flex-col overflow-hidden  h-full text-center border-2 border-secondaryBg rounded p-12">
                <img src="email.png" className="mr-2 h-12 w-12" alt="email"></img>
                    <p>abisekmishra2@gmail.com</p>
                </div>
                <div className="flex-col overflow-hidden  h-full text-center border-2 border-secondaryBg rounded p-12">
                <img src="location.png" className="mr-2 h-12 w-12" alt="email"></img>
                    <p className="text-base">London, United Kingdom</p>
                </div>
                <div className="h-full overflow-hidden flex-col text-center border-2 border-secondaryBg rounded p-12">
                <img src="linkedin.png" className="mr-2 h-12 w-12" alt="email"></img>
                    <p>Abisek Mishra</p>
                </div>
        </div>
    )
}

export default Contact;