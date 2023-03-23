import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import Twog from '../components/Twog';
export default function TwogScreen() {
  const [twog, settwog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
const fetchData = async () => {
  try{
    setLoading(true);
    const { data } = await axios.get('/api/twog');
  setLoading(false);
  settwog(data);
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
      {twog.map((twog) =>(
        <Twog key={twog._id} twog={twog}></Twog>

      ))}
      </div>
   )}
 
    
    </div>
 
  )
}
