import React from 'react'
import styles from './nav.module.css'
// import logo from '../../images/logo.webp'
import {FaYoutube, FaDiscord, FaBars, FaTiktok, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
export default function Nav(){
    const [navControl, setNavControl] = React.useState()
    const windowWidth = window.screen.availWidth
    let resizeNavOnClick
    windowWidth <= 768 ? resizeNavOnClick = () => setNavControl('-100%') : resizeNavOnClick = undefined
    /*Without this, nav when clicking on link would stay in right: 0 style which is "showing" nav.
    This code checks if user is under screen resolution that triggers mobile look. If it is it declares
    resizeNavOnClick as function which closes nav. If user is on screen that has 769px or more it declares
    this variable as undefined because it would break styling when clicking on pc*/
    return (
      <div className='text-white z-10'>
          <div onClick={() => setNavControl('0')}>
              <div className="fixed m-5 text-4xl top-0 right-0 md:hidden z-20" >
                  <FaBars/>
              </div>
          </div>
          <nav className={" z-20 flex flex-col right-[-100%] items-center justify-center w-screen h-screen bg-[#0f1015] fixed md:justify-between md:w-[1224px] md:h-12 md:right-0 md:left-0 md:flex-row md:rounded-full pr-2 " + styles.nav} style={{right: navControl}}> 
          <div className="md:h-full md:flex-row flex-col flex items-center justify-center">
            <img src="https://unsplash.it/200/200" alt="logo" className="h-20 mt-8 md:m-0 md:h-full rounded-md"/>
            <h1 className="md:ml-2 text-lg">Mero Studios</h1>
          </div>
            <ul className="flex flex-col justify-items-center items-center mb-10 my-12 gap-3 font-semibold text-4xl md:text-2xl md:mb-0 md:flex-row md:my-0">
                <Link to="/" onClick={resizeNavOnClick}>
                    <li>Home</li>
                </Link>
                <Link to="/contact" onClick={resizeNavOnClick}>
                    <li>Get in touch</li>
                </Link>
            </ul>
              <ul className="flex flex-col justify-items-center items-center mb-10 gap-3 font-semibold text-xl md:mb-0 md:flex-row">
                  <a href="https://www.tiktok.com/@merostudios" target="blank">
                      <li className='text-3xl '>
                          <FaTiktok/>
                      </li>
                  </a>
                  <a href="https://discord.gg/QnxXUCqeWz" target="blank" >
                      <li className='text-4xl text-indigo-600'>
                          <FaDiscord/>
                      </li>
                  </a>
                  <a href="https://www.youtube.com/channel/UCMcQuc_vdqUpssXgfN6Lwhg" target="blank" >
                      <li className='text-4xl '>
                          <FaYoutube className='text-red-500'/>
                      </li>
                  </a>
              </ul>
              <div className="text-6xl md:hidden" onClick={() => setNavControl('-100%')}>
                  <FaTimes/>
              </div>
          </nav>
      </div>
    );
}
