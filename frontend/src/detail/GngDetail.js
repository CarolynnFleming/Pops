import React from 'react'
import gngdata from '../data/gngdata';
import { Link, useParams } from 'react-router-dom';


export default function GngDetail() {
    const { id } = useParams();
    const gng = gngdata.gng.find((x) => x._id === id);
    if(!gng) {
        return <div> Product Not Found</div>
    }
    return (
      <div>
        <Link classname="back"to="/gng">Back to GNG</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={gng.image} alt={gng.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{gng.name}</h1>
                  </li>
                  <li>
                    Price : ${gng.price}
                  </li>
                  <li>
                    description: {gng.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${gng.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {gng.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
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
