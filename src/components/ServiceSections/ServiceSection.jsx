// Find your special someone
import React from 'react'
import { FaUserEdit, FaUserCheck, FaComments } from 'react-icons/fa';

function ServiceSection() {
    return (
        <>
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    {/* <h2 className="text-3xl font-semibold text-center text-red-500 mb-12">
                        Find your Special Someone
                    </h2> */}
                    <h1 className="text-3xl font-semibold text-center text-red-500 mb-12 sm:mt-10 font-poppins italic md:text-4xl lg:text-3xl">
                            Find Your {'  '}
                            <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500">
                                <span className="relative text-white">Special</span>
                            </span>{' '}
                            Someone
                        </h1>
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="w-full sm:w-1/3 md:w-1/4 p-4">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl">
                                        <FaUserEdit />
                                    </div>
                                </div>
                                <div className="text-teal-500 font-semibold mb-2">Sign Up</div>
                                <div className="text-gray-700">Register for free & put up your Matrimony Profile</div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/3 md:w-1/4 p-4">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl">
                                        <FaUserCheck />
                                    </div>
                                </div>
                                <div className="text-teal-500 font-semibold mb-2">Connect</div>
                                <div className="text-gray-700">Select & Connect with Matches you like</div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/3 md:w-1/4 p-4">
                            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl">
                                        <FaComments />
                                    </div>
                                </div>
                                <div className="text-teal-500 font-semibold mb-2">Interact</div>
                                <div className="text-gray-700">Become a Premium Member & Start a Conversation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSection