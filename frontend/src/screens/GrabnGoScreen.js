import React from 'react'
import gngdata from '../gngdata'
import Gng from '../components/Gng';
export default function GrabnGoScreen() {
    
  return (
    <div className="row center">
        {
        gngdata.gng.map((gng) =>(
          <Gng key={gng._id} gng={gng}></Gng>

        ))
      }
   
      </div>
  )
}
