import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listOneg } from '../actions/onegActions';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import Oneg from '../components/Oneg';
export default function OnegScreen() {
  const dispatch = useDispatch();
  const onegList = useSelector((state) => state.onegList);
  const { loading, error, oneg  } = onegList;
  useEffect(() => {
    dispatch(listOneg());
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
        {oneg.map((oneg) =>(
          <Oneg key={oneg._id} oneg={oneg}></Oneg>

        ))}
        </div>
     )}
   
      
      </div>
  )
}
