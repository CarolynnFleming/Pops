import React from 'react'
import Offering from '../components/Offering';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function OfferingScreen() {
  const [offerings, setOfferings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
const fetchData = async () => {
  try{
    setLoading(true);
    const { data } = await axios.get('/api/offerings');
  setLoading(false);
  setOfferings(data);
  } catch (err) {
    setError(err.message);
    setLoading(false)
  }
  
}
fetchData();
  }, [])
  return (
    <div>
      {loading ? (
      <LoadingBox></LoadingBox>
      ): error ? (
      <MessageBox>{error}</MessageBox>
   ):( 
   <div className="row center">
        {offerings.map((offering) =>(
          <Offering key={offering.name} offering={offering}></Offering>

        ))}
        </div>
     )}
   
      
      </div>
  )
}
