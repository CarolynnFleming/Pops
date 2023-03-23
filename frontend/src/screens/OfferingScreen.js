import React from 'react'
import Offering from '../components/Offering';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function OfferingScreen() {
  const [offerings, setOfferings] = useState([]);
  useEffect(() => {
const fetchData = async () => {
  const { data } = await axios.get('/api/offerings');
  setOfferings(data);
}
fetchData();
  }, [])
  return (
    <div className="row center">
        {
        offerings.map((offering) =>(
          <Offering key={offering.name} offering={offering}></Offering>

        ))
      }
   
      </div>
  )
}
