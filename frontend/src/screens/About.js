import React from 'react'
import ice from '../assets/italian-ice.jpg';
import corn from '../assets/corn-images.jpeg'
export default function About() {
  return (
    <div className='about'>
        <h1 className='row center'>We’re a business dedicated to <br/> having the best Popcorn and <br/>Italian Ice flavors to choose <br/>from
</h1>
<div className='row center'>
<img className='ice' src={ice} alt='ice'/>

</div>
<div className='row center'>
<img className='ice' src={corn} alt='corn'/>
</div>
<div className='golden'>

<span className='message'><h2 className='lead'>Our Mission</h2>Build the best product that creates the most value <br/>for our customers, use business to inspire and <br/>implement environmentally friendly solutions.</span>

<span ><h2 className='lead'>Our Vission</h2>We strive to go above and beyond for our clients no <br/>matter the challenge. We aim to deliver our very <br/>best work every single day across our services.</span>
</div>
    
    </div>
  )
}
