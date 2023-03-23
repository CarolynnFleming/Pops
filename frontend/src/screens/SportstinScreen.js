import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import Sportstin from '../components/Sportstin';
export default function SportstinScreen() {
  const [sportstin, setsportstin] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
const fetchData = async () => {
  try{
    setLoading(true);
    const { data } = await axios.get('/api/sportstin');
  setLoading(false);
  setsportstin(data);
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
      <MessageBox variant='danger'>{error}</MessageBox>
   ):( 
   <div className="row center">
        {sportstin.map((sportstin) =>(
          <Sportstin key={sportstin._id} sportstin={sportstin}></Sportstin>

        ))}
        </div>
     )}
   
      
      </div>
  )
}
