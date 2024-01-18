const Header = () => {
    return (
        <header className="p-4 bg-sky-700">
            <nav className="container mx-auto flex justify-between items-cente">
                <h1 className="text-2xl font-bold text-sky-50">LOGO</h1>
                <div className=" gap-10 text-sky-50 hidden lg:flex">
                    <button className="flex items-center space-x-2"> Prefabs </button>
                    <button className="flex items-center space-x-2"> About</button>
                    <button className="flex items-center space-x-2"> Demo </button>
                </div>
                <div className="items-center space-x-2 bg-white py-1 px-2 rounded-full hidden lg:flex">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                    <input className="outline-none" type="text" placeholder="Search" />
                </div>
                <button className="lg:hidden">
                    <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path fill="#fff" fill-rule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm-4 4a1 1 0 100-2H6a1 1 0 100 2h8zm5 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-5 5a1 1 0 100-2H6a1 1 0 100 2h8z" />
                    </svg>
                </button>
            </nav>
        </header>
    )
}

export default Header