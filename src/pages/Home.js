import React from 'react'

import Title from '../components/Title'
import Footer from '../components/Footer'
import LitleIntro from '../components/LittleIntro'

export default function Home() {
    return (
        <div>
            
            <Title />
            <LitleIntro />
            <Footer/>
            <div className="Secret">
                <span role="img" aria-label="video-games">
                    🎮 Start The Secret 🎮
                 </span>
            </div>
        </div>
    )
}
