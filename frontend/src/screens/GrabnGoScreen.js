import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listGng } from '../actions/gngActions';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import Gng from '../components/Gng';

export default function GrabnGoScreen() {
  const dispatch = useDispatch();
  const gngList = useSelector((state) => state.gngList);
  const { loading, error, gng  } = gngList;
  useEffect(() => {
    dispatch(listGng());
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
        {gng.map((gng) =>(
          <Gng key={gng._id} gng={gng}></Gng>

        ))}
        </div>
     )}
   
      
      </div>
  )
}
