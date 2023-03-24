import React from 'react'
import twogdata from '../data/twogdata';
import { Link, useParams } from 'react-router-dom';


export default function TwogDetail() {
    const { id } = useParams();
    const twog = twogdata.twog.find((x) => x._id === id);
    if(!twog) {
        return <div> Product Not Found</div>
    }
    return (
      <div>
        <Link classname="back"to="/twog">Back to 2 Gallon</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={twog.image} alt={twog.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{twog.name}</h1>
                  </li>
                  <li>
                    Price : ${twog.price}
                  </li>
                  <li>
                    description: {twog.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${twog.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {twog.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
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
