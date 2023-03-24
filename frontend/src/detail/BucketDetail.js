import React from 'react'
import bucketdata from '../data/bucketdata';
import { Link, useParams } from 'react-router-dom';


export default function BucketDetail() {
    const { id } = useParams();
    const bucket = bucketdata.bucket.find((x) => x._id === id);
    if(!bucket) {
        return <div> Product Not Found</div>
    }
    return (
      <div>
        <Link classname="back"to="/bucket">Back to Bucket</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={bucket.image} alt={bucket.name}/>
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{bucket.name}</h1>
                  </li>
                  <li>
                    Price : ${bucket.price}
                  </li>
                  <li>
                    description: {bucket.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${bucket.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {bucket.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='error'>Unavailable</span>)}
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
