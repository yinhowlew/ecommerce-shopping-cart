import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart  } from '../actions'
import util from '../util'

// const mapStateToProps = state => { 
//     return {
//         cartItems: state.productReducer.cartItems,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         removeFromCart: (a,b) => dispatch(removeFromCart(a,b)),
//     }  
// } 

const Basket = () => {
    const cartItems = useSelector(state => state.productReducer.cartItems);
    // const { cartItems } = this.props;
    const dispatch = useDispatch();

    return (
        <div className="alert alert-info">
            {cartItems.length === 0
                ? "Basket is empty" :
                <div>You have {cartItems.length} items in the basket. <hr /></div>
            }
            {cartItems.length > 0 &&
                <div>
                    <ul style={{ marginLeft: -25 }}>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <b>{item.title}</b>
                                <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                    onClick={() => dispatch(removeFromCart(cartItems, item))}>X</button>
                                <br />
                                {item.count} X {util.formatCurrency(item.price)}
                            </li>))
                        }
                    </ul>

                    <b>Sum: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                    </b>
                    <button onClick={() => alert('Pending: implement checkout page.')} className="btn btn-primary">checkout</button>
                </div>
            }
        </div>
    )
}

export default Basket;
