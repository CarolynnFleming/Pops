import React from 'react'
import mixesdata from '../mixesdata'
import Mixes from '../components/Mixes';

export default function MixesScreen() {
  return (
    <div className="row center">
        {
        mixesdata.mixes.map((mixes) =>(
          <Mixes key={mixes._id} mixes={mixes}></Mixes>

        ))
      }
   
      </div>
  )
}