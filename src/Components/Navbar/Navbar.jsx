import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcons from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileImg from '../../assets/profile_img.png'
import dropdown from '../../assets/caret_icon.svg'
import { logout } from '../../Filebase'
function Navbar() {
    const navbar = useRef();
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY >= 80) {
    //             navbar.current.classList.add('dark-nav')
    //         } else {
    //             navbar.current.classList.remove('dark-nav')

    //         }
    //     })
    // }, [])
    useEffect(() => {
        const handleScroll = () => {
            if (!navbar.current) return; // ✅ avoid accessing classList on null
            if (window.scrollY >= 80) {
                navbar.current.classList.add('dark-nav');
            } else {
                navbar.current.classList.remove('dark-nav');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // ✅ Cleanup listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div ref={navbar} className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt="" className='nav-logo' />
                <ul>
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Brows by Languages</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={searchIcons} className="icons" />
                <p>Children</p>
                <img src={bellIcon} className="icons" />
                <div className="navbar-profile">
                    <img src={profileImg} className="profile" />
                    <img src={dropdown} />
                    <div className="dropdown">
                        <p onClick={()=>logout()}>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar