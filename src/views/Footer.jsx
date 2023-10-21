import React from 'react';
import { Logo } from '../components';
import {FaDiscord, FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='grid grid-cols-1 lg:grid-cols-3 justify-center text-white bg-neutral-600 p-10'>
      <article>
        <div className='hidden lg:block'><Logo /></div>
        <p className='mb-4 ml-4 lg:text-left'>Join our community</p>
        <div className='flex gap-x-4 ml-4 justify-center lg:justify-start'>
          <a><FaDiscord size={25}/></a>
          <a><FaYoutube size={25}/></a>
          <a><FaTwitter size={25}/></a>
          <a><FaInstagram size={25}/></a>
        </div>
      </article>
      <article className='flex flex-col'>
      <h3 className='font-semibold text-xl lg:text-2xl m-4 text-white'>Explore</h3>
            <a className='text-lg'>Marketplace</a>
            <a className='text-lg' href="#learn">Learn</a>
            <a className='text-lg'>Blog</a>
      </article>
      <article>
        <h3 className='font-semibold text-xl lg:text-2xl m-4 text-white'>Get In Touch</h3>
        <div className='flex justify-center gap-x-4'>
          <a
                  href="https://www.linkedin.com/in/shangguan-wang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="checkout my Linkedin profile"
          >
            <FaLinkedin size={25}/>
          </a>
          <a
                  href="https://github.com/shangguanwang"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="checkout my Github"
          >
            <FaGithub size={25}/>
          </a>
        </div>
        <p>© 2023 by Shangguan Wang</p>
        <p>built with React.js & Tailwind CSS</p>
      </article>
    </footer>
  )
}

export default Footer