/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import './Cart.css'
const Cart = ({selectActor,remaining,totalCost}) => {
    // console.log(selectActor);
    return (
        <div className='cart-container'>
            <h3>Total actor:{selectActor.length}</h3>
            <h4>Remaining: {remaining}</h4>
            <h4> Total Cost:{totalCost}</h4>
            {
                selectActor.map(actor =>(
                    <li key={actor.id}>{actor.name}</li>
                ))
            }
        </div>
    );
};

export default Cart;