import React from 'react';

function Projects() {
  return (
    <div className='mt-40 flex flex-col justify-center items-center'>
      <p className='mb-3 text-black-500 font-cormorantBold text-xl underline'>DEVELOP</p>
      <a
        href='https://www.saehan.app/' // Replace with the actual URL
        target='_blank' // Opens the link in a new tab/window
        rel='noopener noreferrer' // Recommended for security reasons
        className='text-black-500 font-cormorant text-lg'
      >
        Saehan App
      </a>
      <a
        href='https://meta-tennis-4e83a-vite.web.app/' // Replace with the actual URL
        target='_blank' // Opens the link in a new tab/window
        rel='noopener noreferrer' // Recommended for security reasons
        className='text-black-500 font-cormorant text-lg'
      >
        META Tennis
      </a>
      <a
        href='https://diphrent-media.web.app/' // Replace with the actual URL
        target='_blank'
        rel='noopener noreferrer'
        className='text-black-500 font-cormorant text-lg'
      >
        Diphrent Media
      </a>

      <p className='mt-10 mb-3 text-black-500 font-cormorantBold text-xl underline'>CONTRIBUTE</p>
      <a
        href='https://github.com/couetilc/react-social-icons' // Replace with the actual URL
        target='_blank'
        rel='noopener noreferrer'
        className='text-black-500 font-cormorant text-lg'
      >
        Social Icons
      </a>
    </div>
  );
}

export default Projects;
