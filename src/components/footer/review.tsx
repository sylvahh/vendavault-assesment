import { reveiws, reveiwsFilled, xMark } from '@/constants/assets';
import React from 'react';
import Button from '../buttons/button';

const Review = () => {
  const [showTextArea, setShowTextArea] = React.useState(false);
  return (
    <div className='relative flex flex-col'>
      <div className={`${showTextArea ? ' opacity-0' : ''} flex items-center gap-5`}>
        <div className='flex gap-3'>
          <img src={reveiws} alt='reviews' className='w-5' />
          <small>Write Reviews </small>
        </div>
        <button onClick={() => setShowTextArea(true)} className='hover:scale-105'>
          <img src={reveiwsFilled} alt='reviews filled' className='w-12' />
        </button>
      </div>

      {
        <div
          className={`${
            showTextArea ? '-translate-x-[25%]' : ' translate-x-[100%]'
          } fixed bottom-[1%]  flex flex-col gap-2 `}>
          <button onClick={() => setShowTextArea(false)} className='font-mono'>
            <img src={xMark} alt='x mark' className='w-5' />
          </button>
          <div className='flex flex-col gap-3'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter Email'
              className='p-1 outline-primary border border-primary border-opacity-40 rounded'
            />
            <textarea
              name='textarea'
              id='textarea'
              placeholder='Enter Text'
              cols={30}
              rows={5}
              className='p-1 outline-primary border border-primary border-opacity-40 resize-none rounded'
            />
          </div>

          <Button className='rubik-regular text-secondary hover:scale-105 hover:text-primary'>Submit</Button>
        </div>
      }
    </div>
  );
};

export default Review;
