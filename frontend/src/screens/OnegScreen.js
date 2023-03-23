import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import Oneg from '../components/Oneg';
export default function OnegScreen() {
  const [oneg, setoneg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
const fetchData = async () => {
  try{
    setLoading(true);
    const { data } = await axios.get('/api/oneg');
  setLoading(false);
  setoneg(data);
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
        {oneg.map((oneg) =>(
          <Oneg key={oneg._id} oneg={oneg}></Oneg>

        ))}
        </div>
     )}
   
      
      </div>
  )
}
