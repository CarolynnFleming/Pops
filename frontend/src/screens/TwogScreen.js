import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listTwog } from '../actions/twogActions';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import Twog from '../components/Twog';
export default function TwogScreen() {
  const dispatch = useDispatch();
  const twogList = useSelector((state) => state.twogList);
  const { loading, error, twog  } = twogList;
  useEffect(() => {
    dispatch(listTwog());
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
      {twog.map((twog) =>(
        <Twog key={twog._id} twog={twog}></Twog>

      ))}
      </div>
   )}
 
    
    </div>
 
  )
}
