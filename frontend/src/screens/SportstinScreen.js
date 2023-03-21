import React from 'react'
import sportstindata from '../sportstindata'
import Sportstin from '../components/Sportstin';
export default function SportstinScreen() {
  return (
    <div className="row center">
        {
        sportstindata.sportstin.map((sportstin) =>(
          <Sportstin key={sportstin._id} sportstin={sportstin}></Sportstin>

        ))
      }
   
      </div> 
  )
}
