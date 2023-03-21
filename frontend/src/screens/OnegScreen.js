import React from 'react'
import onegdata from '../onegdata'
import Oneg from '../components/Oneg';
export default function OnegScreen() {
  return (
    <div className="row center">
    {
    onegdata.oneg.map((oneg) =>(
      <Oneg key={oneg._id} oneg={oneg}></Oneg>

    ))
  }

  </div>
  )
}
