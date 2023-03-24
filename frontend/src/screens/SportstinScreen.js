import React from 'react'
import { Link } from 'react-router-dom';
import {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listSportstin } from '../actions/sportstinActions';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import Sportstin from '../components/Sportstin';
export default function SportstinScreen() {
  const dispatch = useDispatch();
  const sportstinList = useSelector((state) => state.sportstinList);
  const { loading, error, sportstin  } = sportstinList;
  useEffect(() => {
    dispatch(listSportstin());
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
        {sportstin.map((sportstin) =>(
          <Sportstin key={sportstin._id} sportstin={sportstin}></Sportstin>

        ))}
        </div>
     )}
   
      
      </div>
  )
}
