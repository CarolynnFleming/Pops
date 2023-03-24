import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listBucket } from '../actions/bucketActions';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import Bucket from '../components/Bucket';
export default function BucketScreen() {
  const dispatch = useDispatch();
  const bucketList = useSelector((state) => state.bucketList);
  const { loading, error, bucket  } = bucketList;
  useEffect(() => {
    dispatch(listBucket());
  }, [dispatch])
  return (
    <div>
      <Link className="back"to="/offeringscreen">Back to Offerings</Link>
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
