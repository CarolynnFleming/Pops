import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsMixes } from '../actions/mixesActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function MixesDetail() {
  const dispatch = useDispatch(); 
  const { id }= useParams();
  
   const mixesDetails = useSelector((state) => state.mixesDetails);
  const { loading, error, mixes } = mixesDetails;

  useEffect(() => {
    dispatch(detailsMixes(id));
  }, [dispatch, id]);

    return (
        <div>
  
          {loading ? (
          <LoadingBox></LoadingBox>
          ): error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
       ):( 
        <div>
        <Link className="back"to="/mixesbags">Back to Mixes</Link>
          <div className='row top'>
              <div className='col-2'>
              <img className='large' src={mixes?.image} alt={mixes?.name}/>
              
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{mixes?.name}</h1>
                  </li>
                  <li>
                    Price : ${mixes?.price}
                  </li>
                  <li>
                    description: {mixes?.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${mixes?.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {mixes?.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='danger'>Unavailable</span>)}
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
