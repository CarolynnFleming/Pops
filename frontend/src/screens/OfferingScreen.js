import React from 'react'
import data from '../data';
import Offering from '../components/Offering';

export default function OfferingScreen() {
  return (
    <div className="row center">
        {
        data.offering.map((offering) =>(
          <Offering key={offering._id} offering={offering}></Offering>

        ))
      }
   
      </div>
  )
}
