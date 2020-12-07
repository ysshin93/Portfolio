import React from 'react'
import './Home.css'
import Profile from "./img/profile.jpg"
import Cats from "./img/thor_chu.jpg"

function Home() {
    return (
        <div className="home">
            <div dlss="img__wrap">
                <a href="https://www.instagram.com/yoonsik.e/"><img src={ Profile } ></img></a>
                <p class="img__wrt"> Click Me! </p>
            </div>
            <a href="https://www.instagram.com/ddol.chu_/"> <img src={ Cats }></img> About my cats </a>
        </div>
    )
}

export default Home
