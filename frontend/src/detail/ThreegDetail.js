import React from 'react'
import threegdata from '../threegdata';
import { Link, useParams } from 'react-router-dom';


export default function ThreegDetail() {
    const { id } = useParams();
    const threeg = threegdata.threeg.find((x) => x._id === id);
    if(!threeg) {
        return <div> Product Not Found</div>
    }
    return (
      <div>
        <Link classname="back"to="/threeg">Back to Bags</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={threeg.image} alt={threeg.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{threeg.name}</h1>
                  </li>
                  <li>
                    Price : ${threeg.price}
                  </li>
                  <li>
                    description: {threeg.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${threeg.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {threeg.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
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
