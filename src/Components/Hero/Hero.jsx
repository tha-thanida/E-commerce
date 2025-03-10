import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <div>
                <div className="hero-hand-icon">
                    <p>New Collections</p>
                </div>
                <p>For everyone</p>
            </div>
            <div className="hero-lastest-btn">
                <div>Lastest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero
