import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Home() {



    return (
        <>
            <div className="bg-cover bg-center h-screen blur-none" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/09/07/16/53/couple-437968_1280.jpg)' }}>

                <div className="flex absolute justify-center md:my-48 items-start">
                    <div className="max-w-4xl mx-auto px-4 lg:px-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left text-gray-900 mb-4">
                            Make The <span className='text-purple-700'>Perfect</span> Partner
                        </h1>

                        <NavLink
                            to="/signup"
                            className="w-64 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            Sign Up
                        </NavLink>

                    </div>
                </div>

                {/* Login form  */}
                <div className="flex justify-end items-center min-h-screen">
                    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg mr-10">
                        <h2 className="text-2xl font-bold text-center mb-6">Login Form</h2>
                        <form className="space-y-4">

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </>
    );
}
