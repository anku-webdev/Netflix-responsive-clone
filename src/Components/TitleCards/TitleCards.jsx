import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'

function TitleCards({ title , category }) {
    const [apiData, setApiData] = useState([])

    const API_KEY = "8076f1d0c33e16d8e6187752521192c3"

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1&api_key=${API_KEY}`
        )
            .then((res) => res.json())
            .then((res) => {
                console.log("API RESPONSE:", res) // 👀 check in console
                setApiData(res.results || [])
            })
            .catch((err) => console.error("Fetch Error:", err))
    }, [])

    return (
        <div className="title-cards">
            <h2>{title ? title : "Popular in Netflix"}</h2>
            <div className="hero-movies">
                {apiData.length === 0 ? (
                    <p>⚠️ No data found</p>
                ) : (
                    apiData.map((card, index) => {
                        const imageUrl = card.backdrop_path
                            ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
                            : `https://image.tmdb.org/t/p/w500${card.poster_path}`

                        return (
                            <Link to={`/player/${card.id}`} className="card" key={index}>
                                <img src={imageUrl} alt={card.original_title} />
                                <p>{card.original_title}</p>
                            </Link>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default TitleCards
