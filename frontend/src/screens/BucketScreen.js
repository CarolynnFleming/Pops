import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import Bucket from '../components/Bucket';
export default function BucketScreen() {
  const [bucket, setbucket] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
const fetchData = async () => {
  try{
    setLoading(true);
    const { data } = await axios.get('/api/bucket');
  setLoading(false);
  setbucket(data);
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
      {bucket.map((bucket) =>(
        <Bucket key={bucket._id} bucket={bucket}></Bucket>

      ))}
      </div>
   )}
 
    
    </div>
  )
}
