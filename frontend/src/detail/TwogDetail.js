import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsTwog } from '../actions/twogActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function TwogDetail() {
  const dispatch = useDispatch(); 
  const { id }= useParams();
  
   const twogDetails = useSelector((state) => state.twogDetails);
  const { loading, error, twog } = twogDetails;

  useEffect(() => {
    dispatch(detailsTwog(id));
  }, [dispatch, id]);
    return (
      <div>
  
          {loading ? (
          <LoadingBox></LoadingBox>
          ): error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
       ):( 
        <div>
        <Link className="back"to="/twog">Back to twogs</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={twog?.image} alt={twog?.name}/>
              
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{twog?.name}</h1>
                  </li>
                  <li>
                    Price : ${twog?.price}
                  </li>
                  <li>
                    description: {twog?.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${twog?.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {twog?.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='danger'>Unavailable</span>)}
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
