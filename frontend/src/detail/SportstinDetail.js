import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsSportstin } from '../actions/sportstinActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function SportstinDetail() {
  const dispatch = useDispatch(); 
  const { id: _id }= useParams();
  
   const sportstinDetails = useSelector((state) => state.sportstinDetails);
  const { loading, error, sportstin } = sportstinDetails;

  useEffect(() => {
    dispatch(detailsSportstin(_id));
  }, [dispatch, _id]);
    return (
      <div>
  
          {loading ? (
          <LoadingBox></LoadingBox>
          ): error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
       ):( 
        <div>
        <Link className="back"to="/sportstin">Back to sportstins</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={sportstin?.image} alt={sportstin?.name}/>
              
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{sportstin?.name}</h1>
                  </li>
                  <li>
                    Price : ${sportstin?.price}
                  </li>
                  <li>
                    description: {sportstin?.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${sportstin?.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {sportstin?.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='danger'>Unavailable</span>)}
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
