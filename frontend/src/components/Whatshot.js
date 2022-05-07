import React from 'react'
import './Whatshot.css'

const Whatshot = () => {
  return (
    <div className="whats_hot_section">
    <div className="heading_whats_hot" id="hotty">
      WHAT'S HOT
    </div>
    <div className="whats_hot_image_section">
      <div className="_image_one">
        <div className="image">
          <img src="/images/collection-ss22-Rich_Mnisi-launch-hp-teaser-grid-d_tcm209-822590.png"/>
          </div>
          <div className="paragraph">
            <h3>adidas x RICH MNISI</h3>
            <p>Explore adidas' debut collection developed in partnership with Rick Mnisi. Expressive prints and style join forces with adidas performance and lifestyle.</p>
            <p>SHOP NOW</p>
          </div>
      </div>
      <div className="_image_one">
        <div className="image">
          <img src="/images/dtc-bambi-hp-teaser-carousel-1-d_tcm209-810284.png"/>
          </div>
          <div className="paragraph">
            <h3>DREAM AND IT IS</h3>
            <p>Imagine your dreams are designed to become reality, then go out and chase them in The Bambi Collection.</p>
            <p>SHOP NOW</p>
          </div>
      </div>
      <div className="_image_one">
        <div className="image">
          <img src="/images/football-ss22-arsenal_x_asmc-launch-homepage-1-teaser_carousel-d_tcm209-864299.png"/>
          </div>
          <div className="paragraph">
            <h3>MADE TO BE SEEN</h3>
            <p>The Arsenal x adidas by Stella McCartney collection. Designed to level the playing field.</p>
            <p>SHOP NOW</p>
          </div>
      </div>
      <div className="_image_one">
        <div className="image">
        <video autoPlay loop src="/images/running-ss22-solarglide-launch-hp-teaser-carousel-dual-t.mp4">
        
      </video>
          </div>
          <div className="paragraph">
            <h3>SOLARGLIDE 5. EXPERIENCE GUIDED ENERGY.</h3>
            <p>Run with Superb energy return</p>
            <p>SHOP NOW</p>
          </div>
      </div>        
    </div>      
  </div>
  )
}

export default Whatshot