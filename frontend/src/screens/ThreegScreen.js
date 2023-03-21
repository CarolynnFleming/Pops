import React from 'react'
import threegdata from '../threegdata'
import Threeg from '../components/ThreegScreen';
export default function ThreegScreen() {
  return (
    <div className="row center">
    {
    threegdata.threeg.map((threeg) =>(
      <Threeg key={threeg._id} threeg={threeg}></Threeg>

    ))
  }

  </div>
  )
}
