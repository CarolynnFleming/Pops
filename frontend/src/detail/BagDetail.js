import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { detailsBag } from '../actions/bagActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
export default function BagDetail() {
  const history = useNavigate();
  const dispatch = useDispatch(); 
  const { id }= useParams();
  const [qty, setQty] = useState(0);
   const bagDetails = useSelector((state) => state.bagDetails);
  const { loading, error, bag } = bagDetails;

  useEffect(() => {
    dispatch(detailsBag(id));
  }, [dispatch, id ]);
  const addToCartHandler = (e) => {
    e.preventDefault();
    history(`/cart/${id}?qty=${qty}`);
  };
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
              <img className='large' src={bag.image} alt={bag.name}/>
              
              </div>
              <div className='col-1'>
                <ul>
                    <li>
                  <h1>{bag.name}</h1>
                  </li>
                  <li>
                    Price : ${bag.price}
                  </li>
                  <li>
                    description: {bag.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body' >
                    <ul>
                        <li>
                            <div className='row'>
                                <div>Price</div>
                                <div className='price'>${bag.price}</div>
                            </div>
                        </li>
                        <li>
                            <div className='row'>
                                <div>Status</div>
                                <div >
                                    {bag.countInStock> 0 ? ( <span className='success'>In Stock</span>): (<span className='danger'>Unavailable</span>)}
                                    </div>
                            </div>
                        </li>
                        {bag.countInStock > 0 && (
                          <>
                            <li>
                            <div className="row">
                              <div>Qty</div>
                              <div>
                                <select
                                  value={qty}
                                  onChange={(e) => setQty(e.target.value)}
                                >
                                  {[...Array(bag.countInStock).keys()].map(
                                    (x) => (
                                      <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            </div>
                          </li>
                          <li>
                            <button
                              onClick={addToCartHandler}
                              className='button-85 block'
                            >
                              Add to Cart
                            </button>
                          </li>
                            </>
                           
                          )
                        }
                        
                    </ul>
                </div>
              </div>
          </div>
      </div>
         )}
      </div> 
    );
}
