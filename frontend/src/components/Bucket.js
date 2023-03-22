import React from 'react'

export default function Bucket(props) {
    const { bucket } = props;
    return (
      <div key={bucket._id}className="card">
   <a href={`/bucket/${bucket._id}`}>
          <img className="medium"src={bucket.image} alt="popcorn buckets"/>
      </a>
      <div className="card-body">
          <a href={`/bucket/${bucket._id}`}>
              <h2>{bucket.name}</h2>
          </a>
          
        <div className="detail">{bucket.sizes}<br/> ${bucket.price}</div>
      </div>
      </div>
    )
}
