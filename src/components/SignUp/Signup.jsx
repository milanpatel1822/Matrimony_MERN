import React, { useState } from 'react'

function Signup() {

    const [step, setStep] = useState(1);
    const [gender, setGender] = useState('');
    const [joint, setJoint] = useState('');
    const [handicaped, setHandicaped] = useState('');
    const [status, setStatus] = useState('');

    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const handleJoint = (event) => {
        setJoint(event.target.value);
    };

    const handleCaped = (event) => {
        setHandicaped(event.target.value);
    }

    const handleStatus = (event) => {
        setStatus(event.target.value);
    }
    return (
        <div className="min-h-screen bg-gray-100 flex justify-end items-center pr-10" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/09/07/16/53/couple-437968_1280.jpg)' }}>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex items-center justify-between mb-8">
                    <div className="text-xl font-bold">Registration</div>
                    <div className="text-sm text-gray-500">Step {step} of 4</div>
                </div>

                {step === 1 && (
                    <div>
                        <div className="mb-4">

                            <label htmlFor="First Name" className="block text-sm font-medium text-gray-700">
                                Upload Image <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="file"
                                id="First Name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="First Name" className="block mt-1 text-sm font-medium text-gray-700">
                                First Name <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="text"
                                id="First Name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="Last" className="block mt-1 text-sm font-medium text-gray-700">
                                Last Name <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="text"
                                id="Last"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="DOB" className="block mt-1 text-sm font-medium text-gray-700">
                                Date of Birth <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="Calender"
                                id="DOB"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="gender" className="block mt-2 text-sm font-medium text-gray-700">
                                Select Gender <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <div className="flex items-center mb-2">
                                <label className="flex items-center mr-4">
                                    <input
                                        type="radio"
                                        value="male"
                                        checked={gender === 'male'}
                                        onChange={handleChange}
                                        className="form-radio text-blue-600"
                                    />
                                    <span className="ml-2">Male</span>
                                </label>
                                <label className="flex items-center mr-4">
                                    <input
                                        type="radio"
                                        value="female"
                                        checked={gender === 'female'}
                                        onChange={handleChange}
                                        className="form-radio text-pink-600"
                                    />
                                    <span className="ml-2">Female</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="other"
                                        checked={gender === 'other'}
                                        onChange={handleChange}
                                        className="form-radio text-green-600"
                                    />
                                    <span className="ml-2">Other</span>
                                </label>
                            </div>

                            <label htmlFor="PhoneNo" className="block mt-1 text-sm font-medium text-gray-700">
                                Phone no <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="number"
                                id="PhoneNo"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="Email" className="block mt-1 text-sm font-medium text-gray-700">
                                Email <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="email"
                                id="Email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                        </div>

                        {/* Other fields for step 1 */}
                        <div className="flex justify-end">
                            <button
                                onClick={nextStep}
                                className="py-2 px-4 bg-purple-500 text-white rounded-md shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <div className="mb-4">
                            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                                Your Age <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="number"
                                id="age"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="Profession" className="block text-sm font-medium text-gray-700">
                                Profession <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="text"
                                id="Profession"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="Education" className="block mt-1 text-sm font-medium text-gray-700">
                                Education <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="text"
                                id="Education"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="Address" className="block mt-1 text-sm font-medium text-gray-700">
                                Address <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="text"
                                id="address"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="city" className="block mt-1 text-sm font-medium text-gray-700">
                                City <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="text"
                                id="city"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="state" className="block mt-1 text-sm font-medium text-gray-700">
                                State <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="text"
                                id="state"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="salary" className="block mt-1 text-sm font-medium text-gray-700">
                                Salary <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="number"
                                id="salary"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />
                        </div>
                        {/* Other fields for step 2 */}
                        <div className="flex justify-between">
                            <button
                                onClick={prevStep}
                                className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                            >
                                Previous
                            </button>
                            <button
                                onClick={nextStep}
                                className="py-2 px-4 bg-purple-500 text-white rounded-md shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <div className="mb-4">
                            <label htmlFor="FatherName" className="block text-sm font-medium text-gray-700">
                                Father Name <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="text"
                                id="FatherName"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />
                            <label htmlFor="FatherOccupation" className="block text-sm mt-1 font-medium text-gray-700">
                                Father Occupation <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="text"
                                id="FatherOccupation"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="MotherName" className="block text-sm mt-1 font-medium text-gray-700">
                                Mother Name <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="text"
                                id="MotherName"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="MotherOccupation" className="block text-sm mt-1 font-medium text-gray-700">
                                Mother Occupation <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="text"
                                id="MotherOccupation"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="FMember" className="block text-sm mt-1 font-medium text-gray-700">
                                Family Member <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="number"
                                id="FMember"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="Aincome" className="block mt-1 text-sm font-medium text-gray-700">
                                Annual Income <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="number"
                                id="Aincome"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="jointFamily" className="block mt-2 text-sm font-medium text-gray-700">
                                Joint Family ? <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <div className="flex items-center mb-2">
                                <label className="flex items-center mr-4">
                                    <input
                                        type="radio"
                                        value="yes"
                                        checked={joint === 'yes'}
                                        onChange={handleJoint}
                                        className="form-radio text-blue-600"
                                    />
                                    <span className="ml-2">YES</span>
                                </label>
                                <label className="flex items-center mr-4">
                                    <input
                                        type="radio"
                                        value="No"
                                        checked={joint === 'no'}
                                        onChange={handleChange}
                                        className="form-radio text-pink-600"
                                    />
                                    <span className="ml-2">NO</span>
                                </label>

                            </div>

                        </div>
                        {/* Other fields for step 3 */}
                        <div className="flex justify-between">
                            <button
                                onClick={prevStep}
                                className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                            >
                                Previous
                            </button>
                            <div className="flex justify-end">
                                <button
                                    onClick={nextStep}
                                    className="py-2 px-4 bg-purple-500 text-white rounded-md shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div>
                        <div className="mb-4">
                            <label htmlFor="Religion" className="block text-sm mt-1 font-medium text-gray-700">
                                Religion
                            </label>
                            <input
                                type="text"
                                id="Religion"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="Cast" className="block text-sm mt-1 font-medium text-gray-700">
                                Cast
                            </label>
                            <input
                                type="text"
                                id="cast"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="SubCast" className="block text-sm mt-1 font-medium text-gray-700">
                                Sub Cast
                            </label>
                            <input
                                type="text"
                                id="subcast"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="Hobbies" className="block text-sm mt-1 font-medium text-gray-700">
                                Hobbies
                            </label>
                            <input
                                type="text"
                                id="Hobbies"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />

                            <label htmlFor="jointFamily" className="block mt-2 text-sm font-medium text-gray-700">
                                Handicaped ? <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <div className="flex items-center mb-2">
                                <label className="flex items-center mr-4">
                                    <input
                                        type="radio"
                                        value="yes"
                                        checked={handicaped === 'yes'}
                                        onChange={handleCaped}
                                        className="form-radio text-blue-600"
                                    />
                                    <span className="ml-2">YES</span>
                                </label>
                                <label className="flex items-center mr-4">
                                    <input
                                        type="radio"
                                        value="No"
                                        checked={handicaped === 'No'}
                                        onChange={handleCaped}
                                        className="form-radio text-pink-600"
                                    />
                                    <span className="ml-2">NO</span>
                                </label>

                            </div>

                            <label htmlFor="gender" className="block mt-2 text-sm font-medium text-gray-700">
                               Status <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <div className="flex items-center mb-2">
                                <label className="flex items-center mr-4">
                                    <input
                                        type="radio"
                                        value="Single"
                                        checked={status === 'Single'}
                                        onChange={handleStatus}
                                        className="form-radio text-blue-600"
                                    />
                                    <span className="ml-2">Single</span>
                                </label>
                                <label className="flex items-center mr-4">
                                    <input
                                        type="radio"
                                        value="Divorce"
                                        checked={status === 'Divorce'}
                                        onChange={handleStatus}
                                        className="form-radio text-pink-600"
                                    />
                                    <span className="ml-2">Divorce</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        value="Widow"
                                        checked={status === 'Widow'}
                                        onChange={handleStatus}
                                        className="form-radio text-green-600"
                                    />
                                    <span className="ml-2">Widow</span>
                                </label>
                            </div>

                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password <span className='text-red-600 text-sm'>*</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                            />
                        </div>
                        {/* Other fields for step 3 */}
                        <div className="flex justify-between">
                            <button
                                onClick={prevStep}
                                className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                            >
                                Previous
                            </button>
                            <button
                                type="submit"
                                className="py-2 px-4 bg-purple-500 text-white rounded-md shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Signup