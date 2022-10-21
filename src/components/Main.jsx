import React, {useState, useEffect} from 'react' 
import {Link} from 'react-router-dom'
import nig from '../assets/nigga.png'

const Main = () => {

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
        <div className='flex justify-center mt-8 h-[40%] md:right-[15%] md:absolute md:h-[70%] md:mt-12'>
          <img src={nig} alt=''/>
        </div>
        <div className='md:flex md:flex-col md:justify-center md:items-start md:h-[80%]'>
          <h1 className='dark:text-neutral-200 md:ml-[8.3%] duration-300 md:text-5xl font-bold text-sky-900 text-3xl text-center mt-8'><Link className='cursor-default bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Welcome</Link> to Nigga Site</h1>
          <p className='md:font-normal md:text-start md:ml-[7%] md:w-[30%] md:text-3xl mt-4 text-xl text-center p-5 text-gray-700 font-normal dark:text-neutral-300'>This website is featured with photos of sexy niggas. You can now browse for hot niggas that you like.</p>
        </div>
      </div>
    </div>
  )
}

export default Main