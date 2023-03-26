import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsGng } from '../actions/gngActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function GngDetail() {
  const dispatch = useDispatch(); 
  const { id: _id }= useParams();
  
   const gngDetails = useSelector((state) => state.gngDetails);
  const { loading, error, gng } = gngDetails;

  useEffect(() => {
    dispatch(detailsGng(_id));
  }, [dispatch, _id]);
    return (
      <div>
  
      {loading ? (
      <LoadingBox></LoadingBox>
      ): error ? (
      <MessageBox variant='danger'>{error}</MessageBox>
   ):( 
    <div>
    <Link className="back"to="/Gng">Back to gngs</Link>
      <div className='row top'>
          <div className='col-2'>
          <img className='large' src={gng?.image} alt={gng?.name}/>
          
          </div>
          <div className='col-1'>
            <ul>
                <li>
              <h1>{gng?.name}</h1>
              </li>
              <li>
                Price : ${gng?.price}
              </li>
              <li>
                description: {gng?.description}
              </li>
            </ul>
          </div>
          <div className='col-1'>
            <div className='card card-body' >
                <ul>
                    <li>
                        <div className='row'>
                            <div>Price</div>
                            <div className='price'>${gng?.price}</div>
                        </div>
                    </li>
                    <li>
                        <div className='row'>
                            <div>Status</div>
                            <div >
                                {gng?.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='danger'>Unavailable</span>)}
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
