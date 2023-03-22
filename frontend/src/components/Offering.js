import React from 'react'

export default function Offering(props) {
    const { offering } = props;
  return (
    <div key={offering._id}className="card">
    <a href={offering.location}>
        <img className="medium"src={offering.image} alt="popcorn bags"/>
    </a>
    <div className="card-body">
        <a href={offering.location}>
            <h2>{offering.name}</h2>
        </a>
        {/* <div className="rating">
            <span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </span>
        </div> */}
      <div className="detail">{offering.flavors} Flavors Available<br/> {offering.sizes}Sizes Available</div>
    </div>
</div>
  )
}
