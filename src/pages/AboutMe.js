const AboutMe = () => {

    // const boxes = document.querySelectorAll(".abisek-box")
    // const divider = document.querySelector(".abisek-divider")
    // const startText = document.querySelector(".abisek-start-text")

    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach((entry) => {
    //         console.log(entry)
    //         entry.target.classList.toggle('opacity-0', entry.isIntersecting)
    //     })
    // },
    //     // { rootMargin: "50px" }
    // );
    // // observer.observe(divider);
    // // observer.observe(startText);
    // boxes.forEach((box) => {
    //     observer.observe(box);
    // });

    return (
        <div id="About" className="grid lg:grid-cols-4 gap-10 lg:justify-around items-center lg:p-44 p-12">
            <div className="flex overflow-hidden lg:flex-row flex-col lg:h-full w-full justify-start lg:items-center items-start">
                <div className="abisek-start-text flex-col lg:p-6 p-2">
                    <h1 className="text-4xl">who</h1>
                    <h1 className="text-6xl font-bold">AM I?</h1>
                </div>
                <div className="abisek-divider lg:w-0 lg:h-full w-full lg:border-r border-t border-secondaryBg lg:mx-8 my-4"></div>
            </div>
            <div className="abisek-box flex-col overflow-hidden  h-full text-center border-2 border-secondaryBg bg-boxBg rounded-3xl p-12">
                <h1 className="text-3xl font-bold mb-2">4+</h1>
                <p>years experience developing robust and testing software solutions in collaborative environments</p>
            </div>
            <div className="abisek-box flex-col overflow-hidden  h-full text-center border-2 border-secondaryBg bg-boxBg rounded-3xl p-12">
                <h1 className="text-3xl font-bold mb-2">10+</h1>
                <p className="text-base">tools and frameworks including but not limited to Python, GCP, MySQL and Rest APIs</p>
            </div>
            <div className="abisek-box h-full overflow-hidden flex-col text-center border-2 border-secondaryBg bg-boxBg rounded-3xl p-12">
                <h1 className="text-3xl font-bold mb-2">Newcastle University</h1>
                <p>Graduated in MSc Advanced Computer Science with Distinction in 2023</p>
            </div>
        </div>
    )
}

export default AboutMe;