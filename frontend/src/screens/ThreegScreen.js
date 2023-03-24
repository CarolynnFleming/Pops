import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listThreeg } from '../actions/threegActions';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import Threeg from '../components/Threeg';
export default function ThreegScreen() {
  const dispatch = useDispatch();
  const threegList = useSelector((state) => state.threegList);
  const { loading, error, threeg  } = threegList;
  useEffect(() => {
    dispatch(listThreeg());
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
      {threeg.map((threeg) =>(
        <Threeg key={threeg._id} threeg={threeg}></Threeg>

      ))}
      </div>
   )}
 
    
    </div>
  )
}
