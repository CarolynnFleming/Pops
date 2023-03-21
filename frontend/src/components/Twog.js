import React from 'react'

export default function Twog(props) {
    const { twog } = props;
    return (
      <div key={twog._id}className="card">
   <a href={`/offering/7/${twog._id}`}>
          <img className="medium"src={twog.image} alt="popcorn twogs"/>
      </a>
      <div className="card-body">
          <a href={`/offering/7/${twog._id}`}>
              <h2>{twog.name}</h2>
          </a>
          
        <div className="detail">{twog.sizes}<br/> ${twog.price}</div>
      </div>
      </div>
    )
}
