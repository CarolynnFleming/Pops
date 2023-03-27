import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MessageBox from '../components/MessageBox';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartActions';
export default function CartScreen() {
    const {id} = useParams();
    const { search } = useLocation();
    const move = useNavigate();
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl ? Number(qtyInUrl) : 0;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if(id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty]);
    const removeFromCartHandle = (id) => {
dispatch(removeFromCart(id));
    }
    const checkoutHandle = () => {
      move('/signin?redirect=/shipping');
    }
  return (
    <div className=' row top'>
      <div className='col-2'>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
        <MessageBox>
          Cart is empty <Link to='/offeringScreen'>Go Shopping</Link>
        </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.bag}>
                <div className='row'>
                  <div>
                    <img
                    src={item.image}
                    alt={item.name}
                    className='small'/>
                  </div>
                  <h1 className='min-30'>
                    <Link to={`/bag/${item.bag}`}>{item.name}</Link>
                  </h1>
                  <select
                  value={item.qty}
                  onChange={(e) =>
                  dispatch(
                    addToCart(item.bag, Number(e.target.value))
                  )}>
                    {[...Array(item.countInStock).keys()].map(
                                    (x) => (
                                      <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                      </option>
                                    )
                                  )}
                  </select>
                </div>
                <h1>${item.price}</h1>
                <div>
                  <button
                  className='del'
                  type='button'
                  onClick={() => removeFromCartHandle(item.bag)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='col-1'>
        <div className='card card-body'>
          <ul>
            <li>
              <h2>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
              type='button'
              onClick={checkoutHandle}
              className="button-85"
              disabled={cartItems.length === 0}>
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
