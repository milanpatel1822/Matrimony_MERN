import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Signup() {
    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            DOB: "",
            gender: "",
            PhoneNo: "",
            Email: "",
            age: "",
            Profession: "",
            Education: "",
            address: "",
            city: "",
            state: "",
            salary: "",
            FatherName: "",
            FatherOccupation: "",
            MotherName: "",
            MotherOccupation: "",
            FMember: "",
            Aincome: "",
            JointFamily: "",
            Religion: "",
            cast: "",
            subCast: "",
            Hobbies: "",
            handicaped: "",
            status: "",
            password: ""
        },
        validationSchema: Yup.object({
            first_name: Yup.string().min(2, 'First Name is to Short').max(25, 'First Name is to Long').required('First Name is required'),
            last_name: Yup.string().min(2, 'Last Name is to Short').max(25, 'Last Name is to Long').required('Last Name is required'),
            DOB: Yup.string().required("Date of Birth is required"),
            gender: Yup.string().required('Gender is required'),
            PhoneNo: Yup.string().required("Enter The Phone Number").matches(/^[0-9]{10}$/, 'Phone number must be in digits'),
            Email: Yup.string().email('Invalid email address').required('Email is required'),
            age: Yup.number().min(21, 'Age is Must be at least 21').required('Age is required'),
            Profession: Yup.string().required('Select Profession'),
            Education: Yup.string().required('Education is required'),
            address: Yup.string().required('Fill the Address'),
            city: Yup.string().required('Enter your City'),
            state: Yup.string().required('select a state'),
            salary: Yup.number().required('Enter Salary'),
            FatherName: Yup.string().matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed for this field '),
            FatherOccupation: Yup.string().matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed for this field '),
            MotherName: Yup.string().matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed for this field '),
            MotherOccupation: Yup.string().matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed for this field '),
            FMember: Yup.string().matches(/^[0-9]{10}$/, 'Family Member must be in digits'),
            Aincome: Yup.string(),
            JointFamily: Yup.string().required('Joint family is required'),
            Religion: Yup.string().matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed for this field '),
            cast: Yup.string().matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed for this field '),
            subCast: Yup.string().matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed for this field '),
            Hobbies: Yup.string().matches(/^[A-Za-z\s]+$/, 'Only alphabets are allowed for this field '),
            handicaped: Yup.string().required('Your are Handicaped ?'),
            status: Yup.string().required('Status is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });


    const [step, setStep] = useState(1);
    const [gender, setGender] = useState('');
    const [joint, setJoint] = useState('');
    const [handicaped, setHandicaped] = useState('');
    const [status, setStatus] = useState('');
    const [showPassword, setShowPassword] = useState(false);


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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];



    return (
        <div className="min-h-screen bg-gray-100 bg-cover flex justify-end items-center py-8 px-5" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/09/07/16/53/couple-437968_1280.jpg)' }}>

            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg lg:mr-10 ">
                <div className="flex items-center justify-between mb-8">
                    <div className="text-xl font-bold">Registration</div>
                    <div className="text-sm text-gray-500">Step {step} of 4</div>
                </div>
                <form action="" onSubmit={formik.handleSubmit}>
                    {step === 1 && (
                        <div>
                            <div className="mb-4">

                                <label htmlFor="upimage" className="block text-sm font-medium text-gray-700">
                                    Upload Image <span className='text-red-600 text-sm'>*</span>
                                </label>


                                <input
                                    type="file"
                                    id="upimage"
                                    name='upimage'
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />


                                <label htmlFor="First_Name" className="block mt-1 text-sm font-medium text-gray-700">
                                    First Name <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="First_Name"
                                    name='first_name'
                                    value={formik.values.first_name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.first_name && formik.errors.first_name ? <p className='text-red-700'>*** {formik.errors.first_name} ***</p> : null}

                                <label htmlFor="Last_Name" className="block mt-1 text-sm font-medium text-gray-700">
                                    Last Name <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="Last_Name"
                                    name='last_name'
                                    value={formik.values.last_name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.last_name && formik.errors.last_name ? <p className='text-red-700'>*** {formik.errors.last_name} ***</p> : null}

                                <label htmlFor="DOB" className="block mt-1 text-sm font-medium text-gray-700">
                                    Date of Birth <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <input
                                    type="date"
                                    id="DOB"
                                    name='DOB'
                                    value={formik.values.DOB}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.DOB && formik.errors.DOB ? <p className='text-red-700'>*** {formik.errors.DOB} ***</p> : null}

                                <label htmlFor="gender" className="block mt-2 text-sm font-medium text-gray-700">
                                    Select Gender <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <div className="flex items-center mb-2" name='gender'
                                    value={formik.values.gender}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <label className="flex items-center mr-4">
                                        <input
                                            type="radio"
                                            value="male"
                                            name='gender'
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
                                            name='gender'
                                            checked={gender === 'female'}
                                            onChange={handleChange}
                                            className="form-radio text-pink-600"
                                        />
                                        <span className="ml-2">Female</span>
                                    </label>
                                </div>
                                {formik.touched.gender && formik.errors.gender ? <p className='text-red-700'>*** {formik.errors.gender} ***</p> : null}

                                <label htmlFor="PhoneNo" className="block mt-1 text-sm font-medium text-gray-700">
                                    Phone no <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="PhoneNo"
                                    name='PhoneNo'
                                    value={formik.values.PhoneNo}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.PhoneNo && formik.errors.PhoneNo ? <p className='text-red-700'>*** {formik.errors.PhoneNo} ***</p> : null}

                                <label htmlFor="Email" className="block mt-1 text-sm font-medium text-gray-700">
                                    Email <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <input
                                    type="email"
                                    id="Email"
                                    name='Email'
                                    value={formik.values.Email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.Email && formik.errors.Email ? <p className='text-red-700'>*** {formik.errors.Email} ***</p> : null}
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
                                    name='age'
                                    value={formik.values.age}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.age && formik.errors.age ? <p className='text-red-700'>*** {formik.errors.age} ***</p> : null}

                                <label htmlFor="Profession" className="block text-sm font-medium text-gray-700">
                                    Profession <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <select
                                    id="Profession"
                                    name='Profession'
                                    value={formik.values.Profession}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                >
                                    <option value="" disabled selected>Select your profession</option>
                                    <option value="doctor">Doctor</option>
                                    <option value="engineer">Engineer</option>
                                    <option value="teacher">Teacher</option>
                                    <option value="lawyer">Lawyer</option>
                                    {/* Add more options as needed */}
                                </select>
                                {formik.touched.Profession && formik.errors.Profession ? <p className='text-red-700'>*** {formik.errors.Profession} ***</p> : null}

                                <label htmlFor="Education" className="block mt-1 text-sm font-medium text-gray-700">
                                    Education <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="Education"
                                    name='Education'
                                    value={formik.values.Education}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.Education && formik.errors.Education ? <p className='text-red-700'>*** {formik.errors.Education} ***</p> : null}

                                <label htmlFor="address" className="block mt-1 text-sm font-medium text-gray-700">
                                    Address <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name='address'
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.address && formik.errors.address ? <p className='text-red-700'>*** {formik.errors.address} ***</p> : null}

                                <label htmlFor="city" className="block mt-1 text-sm font-medium text-gray-700">
                                    City <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name='city'
                                    value={formik.values.city}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.city && formik.errors.city ? <p className='text-red-700'>*** {formik.errors.city} ***</p> : null}

                                <label htmlFor="state" className="block mt-1 text-sm font-medium text-gray-700">
                                    State <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <select
                                    id="state"
                                    name='state'
                                    value={formik.values.state}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                >
                                    <option value="" disabled selected>Select your state</option>
                                    {indianStates.map(state => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                                {formik.touched.state && formik.errors.state ? <p className='text-red-700'>*** {formik.errors.state} ***</p> : null}

                                <label htmlFor="salary" className="block mt-1 text-sm font-medium text-gray-700">
                                    Salary <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <input
                                    type="number"
                                    id="salary"
                                    name='salary'
                                    value={formik.values.salary}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.salary && formik.errors.salary ? <p className='text-red-700'>*** {formik.errors.salary} ***</p> : null}
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
                                    name='FatherName'
                                    value={formik.values.FatherName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.FatherName && formik.errors.FatherName ? <p className='text-red-700'>*** {formik.errors.FatherName} ***</p> : null}

                                <label htmlFor="FatherOccupation" className="block text-sm mt-1 font-medium text-gray-700">
                                    Father Occupation <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="FatherOccupation"
                                    name='FatherOccupation'
                                    value={formik.values.FatherOccupation}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.FatherOccupation && formik.errors.FatherOccupation ? <p className='text-red-700'>*** {formik.errors.FatherOccupation} ***</p> : null}

                                <label htmlFor="MotherName" className="block text-sm mt-1 font-medium text-gray-700">
                                    Mother Name <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="MotherName"
                                    name='MotherName'
                                    value={formik.values.MotherName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.MotherName && formik.errors.MotherName ? <p className='text-red-700'>*** {formik.errors.MotherName} ***</p> : null}

                                <label htmlFor="MotherOccupation" className="block text-sm mt-1 font-medium text-gray-700">
                                    Mother Occupation <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="MotherOccupation"
                                    name='MotherOccupation'
                                    value={formik.values.MotherOccupation}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.MotherOccupation && formik.errors.MotherOccupation ? <p className='text-red-700'>*** {formik.errors.MotherOccupation} ***</p> : null}

                                <label htmlFor="FMember" className="block text-sm mt-1 font-medium text-gray-700">
                                    Family Member <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <input
                                    type="number"
                                    id="FMember"
                                    name='FMember'
                                    value={formik.values.FMember}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.FMember && formik.errors.FMember ? <p className='text-red-700'>*** {formik.errors.FMember} ***</p> : null}

                                <label htmlFor="Aincome" className="block mt-1 text-sm font-medium text-gray-700">
                                    Annual Income <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <input
                                    type="number"
                                    id="Aincome"
                                    name='Aincome'
                                    value={formik.values.Aincome}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.Aincome && formik.errors.Aincome ? <p className='text-red-700'>*** {formik.errors.Aincome} ***</p> : null}

                                <label htmlFor="jointFamily" className="block mt-2 text-sm font-medium text-gray-700">
                                    Joint Family ? <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <div className="flex items-center mb-2" name="JointFamily"
                                    value={formik.values.JointFamily}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}>
                                    <label className="flex items-center mr-4">
                                        <input
                                            type="radio"
                                            value="yes"
                                            name='jointFamily'
                                            checked={joint === 'yes'}
                                            onChange={handleJoint}
                                            className="form-radio text-blue-600"
                                        />
                                        <span className="ml-2">YES</span>
                                    </label>
                                    <label className="flex items-center mr-4">
                                        <input
                                            type="radio"
                                            value="no"
                                            name='JointFamily'
                                            checked={joint === 'no'}
                                            onChange={handleJoint}
                                            className="form-radio text-pink-600"
                                        />
                                        <span className="ml-2">NO</span>
                                    </label>

                                </div>
                                {formik.touched.JointFamily && formik.errors.JointFamily ? <p className='text-red-700'>*** {formik.errors.JointFamily} ***</p> : null}
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
                                    name='Religion'
                                    value={formik.values.Religion}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.Religion && formik.errors.Religion ? <p className='text-red-700'>*** {formik.errors.Religion} ***</p> : null}

                                <label htmlFor="cast" className="block text-sm mt-1 font-medium text-gray-700">
                                    Cast
                                </label>
                                <input
                                    type="text"
                                    id="cast"
                                    name='cast'
                                    value={formik.values.cast}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.cast && formik.errors.cast ? <p className='text-red-700'>*** {formik.errors.cast} ***</p> : null}

                                <label htmlFor="subCast" className="block text-sm mt-1 font-medium text-gray-700">
                                    Sub Cast
                                </label>
                                <input
                                    type="text"
                                    id="subCast"
                                    name='subCast'
                                    value={formik.values.subCast}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.subCast && formik.errors.subCast ? <p className='text-red-700'>*** {formik.errors.subCast} ***</p> : null}

                                <label htmlFor="Hobbies" className="block text-sm mt-1 font-medium text-gray-700">
                                    Hobbies
                                </label>
                                <input
                                    type="text"
                                    id="Hobbies"
                                    name='Hobbies'
                                    value={formik.values.Hobbies}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                                {formik.touched.Hobbies && formik.errors.Hobbies ? <p className='text-red-700'>*** {formik.errors.Hobbies} ***</p> : null}

                                <label htmlFor="handicaped" className="block mt-2 text-sm font-medium text-gray-700">
                                    Handicaped ? <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <div className="flex items-center mb-2" name="handicaped"
                                    value={formik.values.handicaped}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}>
                                    <label className="flex items-center mr-4">
                                        <input
                                            type="radio"
                                            value="yes"
                                            name='handicaped'
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
                                            name='handicaped'
                                            checked={handicaped === 'No'}
                                            onChange={handleCaped}
                                            className="form-radio text-pink-600"
                                        />
                                        <span className="ml-2">NO</span>
                                    </label>

                                </div>
                                {formik.touched.handicaped && formik.errors.handicaped ? <p className='text-red-700'>*** {formik.errors.handicaped} ***</p> : null}

                                <label htmlFor="status" className="block mt-2 text-sm font-medium text-gray-700">
                                    Status <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <div className="flex items-center mb-2" name="status"
                                    value={formik.values.status}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}>
                                    <label className="flex items-center mr-4">
                                        <input
                                            type="radio"
                                            value="Single"
                                            name='status'
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
                                            name='status'
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
                                            name='status'
                                            checked={status === 'Widow'}
                                            onChange={handleStatus}
                                            className="form-radio text-green-600"
                                        />
                                        <span className="ml-2">Widow</span>
                                    </label>
                                </div>
                                {formik.touched.status && formik.errors.status ? <p className='text-red-700'>*** {formik.errors.status} ***</p> : null}

                                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                                    Password <span className='text-red-600 text-sm'>*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="Password"
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                    />
                                </div>
                                <div className="mt-2 flex items-center">
                                    <input
                                        type="checkbox"
                                        id="showPassword"
                                        value={formik.values.password}
                                        onBlur={formik.handleBlur}
                                        checked={showPassword}
                                        onChange={togglePasswordVisibility}
                                        className="form-checkbox h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
                                    />
                                    <label htmlFor="showPassword" className="ml-2 block text-sm text-gray-900">
                                        Show Password
                                    </label>
                                </div>
                                {formik.touched.password && formik.errors.password ? <p className='text-red-700'>*** {formik.errors.password} ***</p> : null}

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
                </form>
            </div>
        </div>

    )
}

export default Signup