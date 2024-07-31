import React, { useState, useEffect }  from 'react';
import { IoPersonSharp } from "react-icons/io5";

const MatrimonyCard = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/getAll');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          console.log(result);
          setData(result);
        } catch (error) {
          setError(error);
        }
      };
  
      fetchData();
    }, []);
  
    if (error) {
      return <div>Error fetching data: {error.message}</div>;
    }
  return (
    <>
    {data
    .filter(item => item.gender === 'male')
    .map(item => (
    <div className="max-w-2xl mx-auto mt-5 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
    <div className="flex flex-col md:flex-row">
        <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1505632958218-4f23394784a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhhbmRzb21lJTIwYm95fGVufDB8fDB8fHww" alt="Profile" />
        </div>
        <div className="p-8 flex flex-col justify-between">
            <div>
                <div className="uppercase  text-lg  flex items-center tracking-wide  text-indigo-500 font-semibold">
                    <span className='mr-2 '><IoPersonSharp /></span>{item.first_name} {item.last_name}</div>
                <h2 className="block mt-1 text-sm leading-tight font-medium text-black hover:underline">Age: {item.age}</h2>
                <p className="mt-2 text-gray-500">salary: {item.salary}</p>
                <div className="mt-4">
                    <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">Hobbies</span>
                    <span className="inline-block bg-indigo-100 text-pink-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide ml-2">Profession: {item.Profession}</span>
                </div>
            </div>
            <div className="mt-4 md:mt-0 md:self-end">
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Contact
                </button>
            </div>
        </div>
    </div>
</div>
    ))
}
    </>
  );
};

export default MatrimonyCard;
