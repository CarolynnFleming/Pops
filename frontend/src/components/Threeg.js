import React from 'react'

export default function Threeg(props) {
    const { threeg } = props;
    return (
      <div key={threeg._id}className="card">
   <a href={`/threeg/${threeg._id}`}>
          <img className="medium"src={threeg.image} alt="popcorn threegs"/>
      </a>
      <div className="card-body">
          <a href={`/threeg/${threeg._id}`}>
              <h2>{threeg.name}</h2>
          </a>
          
        <div className="detail">{threeg.sizes}<br/> ${threeg.price}</div>
      </div>
      </div>
    )
}
