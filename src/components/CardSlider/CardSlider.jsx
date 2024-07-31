import React from 'react';
import Slider from 'react-slick';
import 'tailwindcss/tailwind.css';
import { IoIosHeart } from "react-icons/io";

const cards = [
  { title: 'Date 1', description: 'When on a date, switch off your phone. Nothing is more insulting to a girl than a man answering every call while on a date. You are allowed to make a small deal about turning off your phone at the start of the date with a comment like "Now we will not be disturbed". Power down your phone or lose your date. Cant have both.', imageUrl: 'https://cdn.pixabay.com/photo/2022/04/12/04/57/couple-7127168_640.jpg' },
  { title: 'Date 2', description: 'When on a date, switch off your phone. Nothing is more insulting to a girl than a man answering every call while on a date. You are allowed to make a small deal about turning off your phone at the start of the date with a comment like "Now we will not be disturbed". Power down your phone or lose your date. Cant have both.', imageUrl: 'https://cdn.pixabay.com/photo/2022/10/21/03/29/relationship-7536124_640.jpg' },
  { title: 'Date 3', description: 'When on a date, switch off your phone. Nothing is more insulting to a girl than a man answering every call while on a date. You are allowed to make a small deal about turning off your phone at the start of the date with a comment like "Now we will not be disturbed". Power down your phone or lose your date. Cant have both.', imageUrl: 'https://cdn.pixabay.com/photo/2020/03/11/15/16/friends-4922436_640.jpg' },
  { title: 'Date 4', description: 'When on a date, switch off your phone. Nothing is more insulting to a girl than a man answering every call while on a date. You are allowed to make a small deal about turning off your phone at the start of the date with a comment like "Now we will not be disturbed". Power down your phone or lose your date. Cant have both.', imageUrl: 'https://cdn.pixabay.com/photo/2023/04/16/11/03/couple-7929926_640.jpg' },
  { title: 'Date 5', description: 'When on a date, switch off your phone. Nothing is more insulting to a girl than a man answering every call while on a date. You are allowed to make a small deal about turning off your phone at the start of the date with a comment like "Now we will not be disturbed". Power down your phone or lose your date. Cant have both.', imageUrl: 'https://cdn.pixabay.com/photo/2023/04/16/11/03/couple-7929926_640.jpg' },
  { title: 'Date 6', description: 'When on a date, switch off your phone. Nothing is more insulting to a girl than a man answering every call while on a date. You are allowed to make a small deal about turning off your phone at the start of the date with a comment like "Now we will not be disturbed". Power down your phone or lose your date. Cant have both.', imageUrl: 'https://cdn.pixabay.com/photo/2023/04/16/11/03/couple-7929926_640.jpg' },
  // Add more cards as needed
];

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container max-w-7xl p-4">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-full hover:drop-shadow-2xl">
              <img src={card.imageUrl} alt={card.title} className="w-full h-96 object-cover" />
              <div className="p-6">
                <h2 className="text-xl flex font-bold items-center ">
                  <span className='text-purple-700'><IoIosHeart /></span>{card.title}
                </h2>

                <p className="text-gray-700 flex justify-between">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
