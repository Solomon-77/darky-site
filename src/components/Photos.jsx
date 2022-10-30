import React, {useState, useEffect} from 'react' 
import {Link} from 'react-router-dom'
import img1 from '../assets/1.jpg'
import img3 from '../assets/3.jpeg'
import img4 from '../assets/1.PNG'

const Photos = () => {

  const saveTheme = () => {
    return JSON.parse(localStorage.getItem('darkMode')) || false
  }
  const [darkMode, setDarkMode] = useState(saveTheme)

  useEffect (() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='h-full md:h-screen font-inter dark:bg-neutral-800 duration-300'>
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
        <div className='flex justify-center items-center duration-300'>
          <h1 className='text-gray-700 dark:text-neutral-300 text-xl font-semibold text-center mt-12'>Photos of Hot Niggas</h1>
          <div className='h-[1px] w-[85%] absolute bg-neutral-300 dark:bg-neutral-700 mt-36 duration-300'></div>
        </div>
        <div className='h-[80%] mt-14 flex justify-center items-center flex-col md:flex-row md:h-[55%]'>
          <div className='flex rounded-lg shadow-xl bg-white w-[300px] h-[200px] m-5 md:mx-8 md:w-[350px] md:h-[250px]'>
            <img className='rounded-l-lg bg-cover w-[50%]' src={img1} alt=''/>
            <div className='flex flex-col justify-center items-center'>
              <h5 class="text-gray-900 text-lg font-semibold mb-2 text-center">Joshua Obuwege</h5>
              <p class="text-gray-700 text-base mb-4 text-center p-3 italic">
                "Free slapping in my house and also free foods."
              </p>
            </div>
          </div>
          <div className='flex rounded-lg shadow-xl bg-white w-[300px] h-[200px] m-5 md:mx-8 md:w-[350px] md:h-[250px]'>
            <img className='rounded-l-lg bg-cover w-[50%]' src={img4} alt=''/>
            <div className='flex flex-col justify-center items-center'>
              <h5 class="text-gray-900 text-lg font-semibold mb-2 text-center">Jhon Arol de Chavez</h5>
              <p class="text-gray-700 text-base mb-4 text-center p-3 italic">
                "Malaki na pototoy ko ngaun pede na magka girlfriend."
              </p>
            </div>
          </div>
          <div className='flex rounded-lg shadow-xl bg-white w-[300px] h-[200px] m-5 mb-12 md:mb-5 md:mx-8 md:w-[350px] md:h-[250px]'>
            <img className='rounded-l-lg bg-cover w-[50%]' src={img3} alt=''/>
            <div className='flex flex-col justify-center items-center'>
              <h5 class="text-gray-900 text-lg font-semibold mb-2 text-center">Akabom Ekuah</h5>
              <p class="text-gray-700 text-base mb-4 text-center p-3 italic">
                "Let's play call of duty in my house and something will happen."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photos