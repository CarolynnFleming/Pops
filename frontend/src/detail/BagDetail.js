import React from 'react'
import bagdata from '../bagdata';
import { Link, useParams } from 'react-router-dom';


export default function BagDetail() {
    const { id } = useParams();
    const bag = bagdata.bag.find((x) => x._id === id);
    if(!bag) {
        return <div> Product Not Found</div>
    }
    return (
      <div>
        <Link classname="back"to="/Bags">Back to Bags</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={bag.image} alt={bag.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{bag.name}</h1>
                  </li>
                  <li>
                    Price : ${bag.price}
                  </li>
                  <li>
                    description: {bag.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${bag.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {bag.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
                                    </div>
                            </div>
                        </li>
                        <li>
                            <button className='button-85 block'>Add to Cart</button>
                        </li>
                    </ul>
                </div>
              </div>
          </div>
      </div>
    )
}
