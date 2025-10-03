import React from 'react'
import './Footer.css'
<div>Footer</div>
import youtube from '../../assets/youtube_icon.png'
import facebook from '../../assets/facebook_icon.png'
import instagram from '../../assets/instagram_icon.png'
import twitter from '../../assets/twitter_icon.png'
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-icons">
                    <img src={youtube} alt="" />
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                </div>
                <div className="footer-menu-list">
                    <ul>
                        <li>Audio Description</li>
                        <li>Help Centes</li>
                        <li>Media Cente</li>
                        <li>Gift Cards</li>
                        <li>Investor Relations</li>
                        <li>Terms of use</li>
                        <li> Privacy</li>
                        <li>Jobs</li>
                        <li>Legal Notice</li>
                        <li>Corporate Inforamtion</li>
                        <li>Cookies Performances</li>
                        <li>Contact Us</li>
                    </ul>
                    <p className="copyright-text">
                       @copyright 2025-2025 Netflix , Inc 
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer