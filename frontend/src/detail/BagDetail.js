import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsBag } from '../actions/bagActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
export default function BagDetail() {
  const dispatch = useDispatch(); 
  const { id: _id }= useParams();
  
   const bagDetails = useSelector((state) => state.bagDetails);
  const { loading, error, bag } = bagDetails;

  useEffect(() => {
    dispatch(detailsBag(_id));
  }, [dispatch, _id]);

    return (
        <div>
  
          {loading ? (
          <LoadingBox></LoadingBox>
          ): error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
       ):( 
        <div>
        <Link className="back"to="/Bags">Back to Bags</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={bag?.image} alt={bag?.name}/>
              
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{bag?.name}</h1>
                  </li>
                  <li>
                    Price : ${bag?.price}
                  </li>
                  <li>
                    description: {bag?.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${bag?.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {bag?.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='danger'>Unavailable</span>)}
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
    );
}
