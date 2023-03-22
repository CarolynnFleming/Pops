import React from 'react'

export default function Mixes(props) {
    const { mixes } = props;
  return (
    <div key={mixes._id}className="card">
 <a href={`/mixesbags/${mixes._id}`}>
        <img className="medium"src={mixes.image} alt="popcorn bags"/>
    </a>
    <div className="card-body">
        <a href={`/mixesbags/${mixes._id}`}>
            <h2>{mixes.name}</h2>
        </a>
        
      <div className="detail">{mixes.sizes}<br/> ${mixes.price}</div>
    </div>
    </div>
  )
}

