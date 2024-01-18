const Hero = () => {
    return (
        <section className="bg-slate-100">
            <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-slate-800 font-extrabold leading-7 md:leading-10">
                        Elevate your web development experience with Tailwind Prefabs
                    </h1>
                    <p className="mt-5 sm:mt-10 lg:w-10/12 text-slate-500 font-normal text-center text-sm sm:text-lg">The seamless component building blocks for effortlessly crafting your perfect web application </p>
                </div>
                <div className="flex justify-center items-center">
                    <button className="  bg-sky-700 transition duration-150 ease-in-out hover:bg-sky-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 py-2 sm:py-4 text-sm">Get Started</button>
                    <button className="ml-4   bg-transparent transition duration-150 ease-in-out hover:border-sky-600 lg:text-xl lg:font-bold  hover:text-sky-600 rounded border border-sky-700 text-sky-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">Book Demo</button>
                </div>
            </div>
        </section>
    )
}

export default Hero