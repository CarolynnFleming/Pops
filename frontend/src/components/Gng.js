import React from 'react'

export default function Gng(props) {
    const { gng } = props;
    return (
      <div key={gng._id}className="card">
   <a href={`/Gng/${gng._id}`}>
          <img className="medium"src={gng.image} alt="popcorn gngs"/>
      </a>
      <div className="card-body">
          <a href={`/Gng/${gng._id}`}>
              <h2>{gng.name}</h2>
          </a>
          
        <div className="detail">{gng.sizes}<br/> ${gng.price}</div>
      </div>
      </div>
    )
}
