import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsThreeg } from '../actions/threegActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function ThreegDetail() {
  const dispatch = useDispatch(); 
  const { id: _id }= useParams();
  
   const threegDetails = useSelector((state) => state.threegDetails);
  const { loading, error, threeg } = threegDetails;

  useEffect(() => {
    dispatch(detailsThreeg(_id));
  }, [dispatch, _id]);

    return (
      <div>
  
          {loading ? (
          <LoadingBox></LoadingBox>
          ): error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
       ):( 
        <div>
        <Link className="back"to="/threeg">Back to threegs</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={threeg?.image} alt={threeg?.name}/>
              
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{threeg?.name}</h1>
                  </li>
                  <li>
                    Price : ${threeg?.price}
                  </li>
                  <li>
                    description: {threeg?.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${threeg?.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {threeg?.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='danger'>Unavailable</span>)}
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
