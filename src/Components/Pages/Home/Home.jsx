import React from 'react'
import './Home.css'
import Navbar from '../../Navbar/Navbar'
import background from '../../../assets/hero_banner.jpg'
import heroTitle from '../../../assets/hero_title.png'
import playIcon from '../../../assets/play_icon.png'
import infoIcon from '../../../assets/info_icon.png'
import moviesData from '../../../assets/cards/Cards_data'
import TitleCards from '../../TitleCards/TitleCards'
import Footer from '../../Footer/Footer'

function Home() {

    return (
        <>
            <div className='home'>
                <Navbar />
                <div className="hero">
                    <img src={background} alt="" className='banner-img' />
                    <div className="hero-caption">
                        <img src={heroTitle} alt="" className='hero-title' />
                        <p className='hero-des'>“A quiet night turns deadly when a secret agent uncovers a conspiracy that could change the world forever.”</p>
                        <div className="play-options">
                            <button className='play-btn'><img src={playIcon} alt="" />  Play </button>
                            <button className='info-btn'>  <img src={infoIcon} alt="" /> More Info  </button>
                        </div>
                    </div>
                </div>
                <div className="more-cards">
                    <TitleCards title="Now Playing" category={"now_playing"} />
                    <TitleCards title="Most Popular" category={"popular"} />
                    <TitleCards title='Top Rated' category={"top_rated"} />
                    <TitleCards title="Upcoming Movies" category={"upcoming"} />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home