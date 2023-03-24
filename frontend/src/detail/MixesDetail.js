import React from 'react'
import mixesdata from '../data/mixesdata';
import { Link, useParams } from 'react-router-dom';


export default function MixesDetail() {
    const { id } = useParams();
    const mixes = mixesdata.mixes.find((x) => x._id === id);
    if(!mixes) {
        return <div> Product Not Found</div>
    }
    return (
      <div>
        <Link className="back"to="/mixesbags">Back to Bags</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={mixes.image} alt={mixes.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{mixes.name}</h1>
                  </li>
                  <li>
                    Price : ${mixes.price}
                  </li>
                  <li>
                    description: {mixes.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${mixes.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {mixes.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
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
