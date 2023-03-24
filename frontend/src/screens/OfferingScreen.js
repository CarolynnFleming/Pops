import React from 'react'
import Offering from '../components/Offering';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import MessageBox from '../components/MessageBox'
import LoadingBox from '../components/LoadingBox'
import { listOfferings } from '../actions/offeringActions';


export default function OfferingScreen() {
  const dispatch = useDispatch();
  const offeringList = useSelector((state) => state.offeringList);
  const { loading, error, offerings  } = offeringList;
  useEffect(() => {
    dispatch(listOfferings());
  }, [dispatch])
  return (
    <div>
      {loading ? (
      <LoadingBox></LoadingBox>
      ): error ? (
      <MessageBox variant='danger'>{error}</MessageBox>
   ):( 
   <div className="row center">
        {offerings.map((offering) =>(
          <Offering key={offering.name} offering={offering}></Offering>

        ))}
        </div>
     )}
   
      
      </div>
  )
}
