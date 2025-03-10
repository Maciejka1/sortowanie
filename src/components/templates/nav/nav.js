import React from 'react'
import styles from './nav.module.css'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
export default function Nav(){
    const [navControl, setNavControl] = React.useState()
    let resizeNavOnClick
    window.screen.availWidth <= 768 ? resizeNavOnClick = () => setNavControl('-100%') : resizeNavOnClick = undefined
    /*Without this, nav when clicking on link would stay in right: 0 style which is "showing" nav.
    This code checks if user is under screen resolution that triggers mobile look. If it is it declares
    resizeNavOnClick as function which closes nav. If user is on screen that has 769px or more it declares
    this variable as undefined because it would break styling when clicking on pc*/
    return (
      <div className='z-10'>
          <div onClick={() => setNavControl('0')}>
              <div className="fixed m-5 text-4xl top-0 right-0 md:hidden z-20" >
                  <FaBars/>
              </div>
          </div>
          <nav className={" z-20 flex flex-col right-[-100%] items-center justify-center w-screen h-screen fixed md:justify-between md:w-[1224px] md:h-12 md:right-0 md:left-0 md:flex-row md:rounded-full pr-2 " + styles.nav} style={{right: navControl}}> 
            <ul className="flex flex-col justify-items-center items-center mb-10 my-12 gap-3 font-semibold text-4xl md:text-2xl md:mb-0 md:flex-row md:my-0">
                <Link to="/bubblesort" onClick={resizeNavOnClick}>
                    <li>Sortowanie Bąbelkowe</li>
                </Link>
            </ul>
          </nav>
      </div>
    );
}
