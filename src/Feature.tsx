const Feature = () => {
    return (
        <div className="bg-sky-100 py-16">
            <h1 className="text-sky-800 text-4xl text-center font-bold">
                Features
            </h1>
            <p className="text-center w-2/3 mx-auto py-3 text-sky-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsa, repellat accusantium aperiam saepe natus incidunt corrupti architecto,
                provident deserunt, ea quo blanditiis?
                Ab harum esse soluta enim neque. Asperiores, eaque.
            </p>
            <div className="md:flex md:justify-center md:space-x-8 md:px-14">
                <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                    <div className="w-sm">
                        <img
                            className="w-64"
                            src="https://source.unsplash.com/random/200x200"
                            alt=""
                        />
                        <div className="mt-4 text-sky-600 text-center">
                            <h1 className="text-xl font-bold">Diverse Selection</h1>
                            <p className="mt-4 text-gray-600">
                                Integrate our prefab components effortlessly into your existing projects, enhancing functionality without the hassle.
                            </p>
                            <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-sky-600 text-white tracking-widest hover:bg-sky-500 transition duration-200">
                                MORE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                    <div className="w-sm">
                        <img
                            className="w-64"
                            src="https://source.unsplash.com/random/200x200"
                            alt=""
                        />
                        <div className="mt-4 text-sky-600 text-center">
                            <h1 className="text-xl font-bold">Easy Integration</h1>
                            <p className="mt-4 text-gray-600">
                                Integrate our prefab components effortlessly into your existing projects, enhancing functionality without the hassle.
                            </p>
                            <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-sky-600 text-white tracking-widest hover:bg-sky-500 transition duration-200">
                                MORE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                    <div className="w-sm">
                        <img
                            className="w-64"
                            src="https://source.unsplash.com/random/200x200"
                            alt=""
                        />
                        <div className="mt-4 text-sky-600 text-center">
                            <h1 className="text-xl font-bold">Optimized Performance</h1>
                            <p className="mt-4 text-gray-600">
                                Maintain high performance standards with components that are optimized for speed and efficiency
                            </p>
                            <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-sky-600 text-white tracking-widest hover:bg-sky-500 transition duration-200">
                                MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature