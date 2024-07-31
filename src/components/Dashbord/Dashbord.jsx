import React, { useState } from 'react'
import MatrimonyCard from './MatrimonyCard';
import ProfileDetails from './ProfileDetails';


function Dashbord() {

   


    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [search, setSearch] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        alert(`Searching for: ${search}`);
    };

    return (
        <>
            <nav className="bg-purple-800 p-4">
                <div className="mx-auto flex flex-wrap max-w-screen-xl justify-between items-center">
                    {/* Desktop Search Input */}
                    <div className="lg:flex flex-grow items-center hidden">
                        <form onSubmit={handleSearchSubmit} className="flex w-full lg:w-1/3">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="flex-grow px-4 py-2 rounded-l-lg border border-gray-600 focus:outline-none focus:border-gray-400"
                                value={search}
                                onChange={handleSearchChange}
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    <div className="block lg:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                        <ul className="lg:flex lg:justify-between text-white lg:text-sm">
                            <li className="relative block lg:inline-block lg:mt-0 mt-4 lg:ml-6">
                                <button
                                    onClick={toggleDropdown}
                                    className="flex items-center hover:text-gray-400"
                                >
                                    Age
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                <div className={`absolute bg-purple-800 text-white w-48 mt-2 rounded-lg shadow-lg ${dropdownOpen ? 'block' : 'hidden'}`}>
                                    <a href="#" className="block px-4 py-2 hover:bg-purple-700 hover:rounded-lg">22-26</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-purple-700 hover:rounded-lg">26-30</a>
                                </div>
                            </li>
                            <li className="relative block lg:inline-block lg:mt-0 mt-4 lg:ml-6">
                                <button
                                    onClick={toggleDropdown}
                                    className="flex items-center hover:text-gray-400"
                                >
                                    I am Looking for
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                <div className={`absolute bg-purple-800 text-white w-48 mt-2 rounded-lg shadow-lg ${dropdownOpen ? 'block' : 'hidden'}`}>
                                    <a href="#" className="block px-4 py-2 hover:bg-purple-700 hover:rounded-lg">Male</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-purple-700 hover:rounded-lg">Female</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="flex flex-col md:flex-row h-screen">
                <aside className="w-full md:w-1/3 lg:w-1/4 p-6 bg-gray-100">
                    <ProfileDetails />
                </aside>
                <main className="w-full md:w-2/3 lg:w-3/4 p-6 overflow-auto">
                    <h1 className="text-xl text-center sm:mt-5 font-poppins italic md:text-4xl lg:text-3xl font-bold text-gray-900 mb-4">
                        <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500">
                            <span className="relative text-white">Profiles</span>
                        </span>{' '}
                    </h1>
                    <div className="grid gap-4">
                        <MatrimonyCard />
                        {/* Add more MatrimonyCard components as needed */}
                    </div>
                </main>
            </div>
        </>
    )
}

export default Dashbord


