import React from 'react'

export default function Bags(props) {
    const { bag } = props;
  return (
    <div key={bag._id}className="card">
 <a href={`/Bags/${bag._id}`}>
        <img className="medium"src={bag.image} alt="popcorn bags"/>
    </a>
    <div className="card-body">
        <a href={`/Bags/${bag._id}`}>
            <h2>{bag.name}</h2>
        </a>
        
      <div className="detail">{bag.sizes}<br/> ${bag.price}</div>
    </div>
    </div>
  )
}
