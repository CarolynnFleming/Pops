import React from 'react'
import twogdata from '../twogdata'
import Twog from '../components/Twog';
export default function TwogScreen() {
  return (
    <div className="row center">
    {
    twogdata.twog.map((twog) =>(
      <Twog key={twog._id} twog={twog}></Twog>

    ))
  }

  </div>
  )
}
