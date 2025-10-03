import React, { useState, useEffect } from 'react'
import './Player.css'
import backArrow from '../../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';
function Player() {

    const { id } = useParams();
    const navigateToHome = useNavigate();
    const [apiData, setApiData] = useState({
        name: '',
        key: '',
        published_at: '',
        type: ''
    })
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDc2ZjFkMGMzM2UxNmQ4ZTYxODc3NTI1MjExOTJjMyIsIm5iZiI6MTc1OTMzNDcwOC40MTIsInN1YiI6IjY4ZGQ1MTM0ZTQ5NTUwNzlhYjUzMWE1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H26GPd3i9hBFAPFHSWzD-8XxDxl4wIwAmexEJP3ZoYk'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => {
                if (res.results && res.results.length > 0) {
                    setApiData(res.results[0]);
                }
            })
            .catch(err => console.error(err));
    }, [id]);

    return (

        <div className='player'>
            <img src={backArrow} className='arrowbtn' onClick={() => { navigateToHome('/') }} />
            <iframe
                src={`https://www.youtube.com/embed/${apiData.key}`}
                title="HIGH ON YOU - Jind Universe | Latest Punjabi Love Song 2024"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
            <div className="player-info">
                <p>{apiData.published_at?.slice(0, 10) || 'N?A'} </p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player