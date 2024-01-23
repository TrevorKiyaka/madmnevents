import React, { useState } from 'react';
import { LuArrowLeftCircle,LuArrowRightCircle } from "react-icons/lu";

const sliderData = [
  {
    url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1626203313658-886791f37e46?q=80&w=2540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1438557068880-c5f474830377?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
// const sliderData = [
//   {
//     url: 'https://i.ibb.co/s59WPG6/image2.jpg',
//   },
//   {
//     url: 'https://i.ibb.co/s59WPG6/image2.jpg',
//   },
//   {
//     url: 'https://i.ibb.co/s59WPG6/image2.jpg',
//   },
// ];

const Gallery = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;
  // console.log(length)

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div id="gallery" className='max-w-[1240px] mx-auto py-8'>
    <div>
    <h1 className='text-center px-4'>Gallery</h1>
      <p className='text-center mt-3'>Experience some of the events</p>
    </div>
    <div className='max-w-[1240px] mx-auto px-4 py-4 relative flex justify-center items-center'>
      {/* <BsArrowLeftSquareFill */}
      <LuArrowLeftCircle
        onClick={prevSlide}
        className='absolute top-[50%] text-5xl text-white cursor-pointer left-8'
      />
      {/* <BsArrowRightSquareFill */}
      <LuArrowRightCircle
        onClick={nextSlide}
        className='absolute top-[50%] text-5xl text-white cursor-pointer right-8'
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
          {index === slide && (
            <img key={index} className='w-full rounded-md' src={item.url} alt='/' />
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Gallery;