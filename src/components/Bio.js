import React from 'react';
import { SocialIcon } from 'react-social-icons'

function Bio() {
  return (
    <div className='mt-40 flex flex-col justify-center items-center'>

      <div className='mt-4 mb-24'>
        <h2 className='text-black-500 font-cormorant text-lg'>software developer based in atlanta</h2>
        <h2 className='text-black-500 font-cormorant text-lg'>actively searching for fulltime roles</h2>
        <h2 className='text-black-500 font-cormorant text-lg'>hobbies: photography & basketball</h2>
      </div>

      <div className='flex flex-row justify-center items-center'>
        <SocialIcon className='m-3' network='github' bgColor='black' url='https://github.com/dkku1020' />
        <SocialIcon className='m-3' network='linkedin' bgColor='black' url='https://www.linkedin.com/in/daniel-ku-09163a162/' />
        <SocialIcon className='m-3'network='x' bgColor='black' url='https://twitter.com/0xdkku' />
        <SocialIcon className='m-3' network='opensea' bgColor='black' url='https://opensea.io/dkku' />
      </div>

    </div>
  );
}

export default Bio;
