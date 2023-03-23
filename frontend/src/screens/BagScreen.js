import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import Bags from '../components/Bags';

export default function BagScreen() {
  const [bag, setBag] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
const fetchData = async () => {
  try{
    setLoading(true);
    const { data } = await axios.get('/api/bags');
  setLoading(false);
  setBag(data);
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
        {bag.map((bag) =>(
          <Bags key={bag._id} bag={bag}></Bags>

        ))}
        </div>
     )}
   
      
      </div>
  )
}
