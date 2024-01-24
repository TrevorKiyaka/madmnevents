import React, { useState } from 'react';
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";
 import image1 from '../assets/gallery1.jpg'
 import image2 from '../assets/gallery2.jpg'
 import image3 from '../assets/gallery3.jpg'
 import image4 from '../assets/gallery4.jpg'
 ;
const sliderData = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
];

const Gallery = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div id="gallery" className='max-w-[1240px] mx-auto py-8 px-4 h-full'>
      <div>
        <h1 className='text-center'>Gallery</h1>
        <p className='text-center mt-3'>Experience some of the events</p>
      </div>
      <div className='max-w-[1240px] mx-auto py-4 relative flex justify-center items-center'>
        <LuArrowLeftCircle
          onClick={prevSlide}
          className='absolute top-[50%] text-5xl text-white cursor-pointer left-8'
        />
        <LuArrowRightCircle
          onClick={nextSlide}
          className='absolute top-[50%] text-5xl text-white cursor-pointer right-8'
        />
        {sliderData.map((item, index) => (
          <div key={item.id} className={index === slide ? 'opacity-100' : 'opacity-0'}>
            {index === slide && (
              <img key={item.id} className='w-full rounded-md' src={item.image} alt='Event' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;