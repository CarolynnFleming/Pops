import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listMixes } from '../actions/mixesActions';
import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import Mixes from '../components/Mixes';

export default function MixesScreen() {
  const dispatch = useDispatch();
  const mixesList = useSelector((state) => state.mixesList);
  const { loading, error, mixes  } = mixesList;
  useEffect(() => {

  dispatch(listMixes());
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
        {mixes.map((mixes) =>(
          <Mixes key={mixes._id} mixes={mixes}></Mixes>

        ))}
        </div>
     )}
   
      
      </div>
  )
}