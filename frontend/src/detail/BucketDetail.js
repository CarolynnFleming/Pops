import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsBucket } from '../actions/bucketActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function BucketDetail() {
  const dispatch = useDispatch(); 
  const { id }= useParams();
  
   const bucketDetails = useSelector((state) => state.bucketDetails);
  const { loading, error, bucket } = bucketDetails;

  useEffect(() => {
    dispatch(detailsBucket(id));
  }, [dispatch, id]);

    
    return (
      <div>
  
          {loading ? (
          <LoadingBox></LoadingBox>
          ): error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
       ):( 
        <div>
        <Link className="back"to="/bucket">Back to buckets</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={bucket?.image} alt={bucket?.name}/>
              
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{bucket?.name}</h1>
                  </li>
                  <li>
                    Price : ${bucket?.price}
                  </li>
                  <li>
                    description: {bucket?.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${bucket?.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {bucket?.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='danger'>Unavailable</span>)}
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
         )}
      </div> 
    )
}
