import React, {useState, useEffect} from 'react' 
import {Link} from 'react-router-dom'
import img from '../assets/5star.png'
import img2 from '../assets/3.jpg'

const About = () => {

  const saveTheme = () => {
    return JSON.parse(localStorage.getItem('darkMode')) || false
  }
  const [darkMode, setDarkMode] = useState(saveTheme)

  useEffect (() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='h-screen font-inter dark:bg-neutral-800 duration-300'>
        <nav className='flex justify-between items-center text-sky-900 text-sm font-medium h-[60px] dark:text-neutral-300 md:h-[70px] md:text-base'>
          <h1 className='px-1 ml-4 md:ml-8 duration-300'>BLACK</h1>
          <div className='flex items-center'>
            <Link className='px-1 mr-2 md:mr-4 hover:text-indigo-500 duration-300' to='/'>Home</Link>
            <Link className='px-1 mr-2 md:mr-4 hover:text-indigo-500 duration-300' to='/photos/'>Photos</Link>
            <Link className='px-1 mr-2 md:mr-4 hover:text-indigo-500 duration-300' to='/about/'>About</Link>
            <div className='bg-neutral-300 h-[20px] md:h-[24px] w-[1px] mr-2 md:mr-4 dark:bg-neutral-700 duration-200'></div>
            <label className='px-1 mr-2 duration-300'>Nigga-Mode</label>
            <button className='mr-4 md:mr-8' onClick={() => setDarkMode(!darkMode)}>🌙</button>
          </div>
          <div className='absolute h-[1px] w-full bg-neutral-300 mt-[60px] dark:bg-neutral-700 duration-300 md:mt-[70px]'></div>
        </nav>
        <div className='text-gray-700 dark:text-neutral-300 text-xl font-semibold text-center mt-12'>
          <h1>The Nigga Mastermind</h1>
        </div>
        <div className='flex justify-center h-[45%] mt-12'>
          <img className='rounded' src={img2} alt=''/>
        </div>
        <div className='flex justify-center h-[3%] mt-6'>
          <img className='mr-1 flex justify-center' src={img} alt=''/>
          <p className='dark:text-neutral-300 text-sm text-gray-700 font-medium'>- 5 star rated and number 1 jacuzzi user.</p>
        </div>
      </div>
    </div>
  )
}

export default About