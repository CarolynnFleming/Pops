import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import Threeg from '../components/Threeg';
export default function ThreegScreen() {
  const [threeg, setthreeg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
const fetchData = async () => {
  try{
    setLoading(true);
    const { data } = await axios.get('/api/threeg');
  setLoading(false);
  setthreeg(data);
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
      {threeg.map((threeg) =>(
        <Threeg key={threeg._id} threeg={threeg}></Threeg>

      ))}
      </div>
   )}
 
    
    </div>
  )
}
