import React from 'react'
import bagdata from '../bagdata'
import Bags from '../components/Bags';

export default function BagScreen() {
  return (
    <div className="row center">
        {
        bagdata.bag.map((bag) =>(
          <Bags key={bag._id} bag={bag}></Bags>

        ))
      }
   
      </div>
  )
}
