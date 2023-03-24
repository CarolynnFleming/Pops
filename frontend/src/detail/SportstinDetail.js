import React from 'react'
import sportstindata from '../data/sportstindata';
import { Link, useParams } from 'react-router-dom';


export default function SportstinDetail() {
    const { id } = useParams();
    const sportstin = sportstindata.sportstin.find((x) => x._id === id);
    if(!sportstin) {
        return <div> Product Not Found</div>
    }
    return (
      <div>
        <Link classname="back"to="/sportstin">Back to SportsTin</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={sportstin.image} alt={sportstin.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{sportstin.name}</h1>
                  </li>
                  <li>
                    Price : ${sportstin.price}
                  </li>
                  <li>
                    description: {sportstin.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${sportstin.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {sportstin.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
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
