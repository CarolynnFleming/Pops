import React from 'react'
import onegdata from '../onegdata';
import { Link, useParams } from 'react-router-dom';


export default function OnegDetail() {
    const { id } = useParams();
    const oneg = onegdata.oneg.find((x) => x._id === id);
    if(!oneg) {
        return <div> Product Not Found</div>
    }
    return (
      <div>
        <Link classname="back"to="/oneg">Back to Bags</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={oneg.image} alt={oneg.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{oneg.name}</h1>
                  </li>
                  <li>
                    Price : ${oneg.price}
                  </li>
                  <li>
                    description: {oneg.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${oneg.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {oneg.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
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
