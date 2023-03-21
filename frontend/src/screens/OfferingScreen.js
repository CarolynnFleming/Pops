import React from 'react'
import data from '../data';
import Offering from '../components/Offering';

export default function OfferingScreen() {
  return (
    <div className="row center">
        {
        data.offerings.map((offering) =>(
          <Offering key={offering.name} offering={offering}></Offering>

        ))
      }
   
      </div>
  )
}
