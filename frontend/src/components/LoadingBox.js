import React from 'react'
import popcorn from '../assets/popcorn.gif'
export default function LoadingBox() {
  return (
    <div>
        <img src={popcorn} alt="corn" className='fa fa-spinner fa-spin'/>
        Popcorn is Popping...🍿
    </div>
  )
}
