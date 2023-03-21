import React from 'react'
import data from '../data';

export default function GrabnGoScreen(props) {
    const offering = data.offering.find(x => x._id === props.match.params.id);
  return (
    <div>
        <div className='row'>
            <div className='col-2'>
            <img src={offering.image} alt={offering.name}/>
            </div>
            <div className='col-1'></div>
            <div className='col-1'></div>
        </div>
    </div>
  )
}
