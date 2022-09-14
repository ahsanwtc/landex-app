import Image from 'next/image';
import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <div id='market' className='max-w-[1240px] mx-auto'>
      <h1 className='text-2xl font-bold text-center p-4'>Market</h1>      
      <div className='relative flex justify-center p-4'>
        {slides.map((slide, index) => {
          return (
            <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
                <FaArrowAltCircleLeft size={50} className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]' onClick={previous} />
                {index === current && <Image src={slide.image} alt='/' width='1440' height='600' objectFit='cover' />}
                <FaArrowAltCircleRight size={50} className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]' onClick={next}/>
              </div>
          );
        })}
      </div>      
    </div>
  );
};

export default Slider;