import React from 'react';

const Cart = ({cartOrder, onOrderHandler, disabled, onCartItemHandler, orderPrice}) => {
    return (
        <fieldset>
            <legend>CART</legend>
            <ul>
                {Object.keys(cartOrder).map(order => {
                    return (
                        <li
                            key={order}
                            className="Order"
                            onClick={() => onCartItemHandler(order)}
                        >
                            <p className="OrderName">{order}</p>
                            <p className="OrderQty">x{cartOrder[order].qty}</p>
                            <p className="OrderKGS">KGS</p>
                            <p className="OrderPrice">{cartOrder[order].price}</p>
                        </li>
                    )
                })}
            </ul>
            <div className="Total">
                <p className="TotalP">Сумма заказа</p>
                <p className="TotalKGS">KGS</p>
                <p className="OrderPrice">{orderPrice}</p>
                <p className="TotalP">Доставка</p>
                <p className="TotalKGS">KGS</p>
                <p className="TotalP">Итог</p>
                <p className="TotalKGS">KGS</p>

            </div>
            <p className="CenterButton">
                <button
                    className="OrderButton"
                    disabled={disabled}
                    onClick={onOrderHandler}
                >
                    PLACE ORDER
                </button>
            </p>
        </fieldset>
    );
};

export default Cart;