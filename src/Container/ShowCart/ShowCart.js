import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Cart from "../../Components/Cart/Cart";
import './ShowCart.css';
import {decrease} from "../../store/Actions/CartAction/Cart";
import Modal from "../../Components/UI/Modal/Modal";
import OrderInfo from "../../Components/OrderInfo/OrderInfo";

const ShowCart = () => {
    const dispatch = useDispatch();
    const priceItem = useSelector(state => state.menuList.menu)
    const cartOrder = useSelector(state => state.cartOrder);
    const [orderPrice, setOrderPrice] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    let price = 0;

    const onCartItemHandler = (key) => {
        priceItem.map(item => {
            if (key === item.name) {
                price = item.price;
            }
            return item;
        })
        dispatch(decrease({key, price}));
    };

    useMemo(() => {
        if (orderPrice === 0) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [orderPrice])

    useEffect(() => {
        let orderTotal = 0;
        Object.keys(cartOrder).map(price => {
            orderTotal += cartOrder[price].price;
            return price;
        });

        setOrderPrice(orderTotal);
    }, [cartOrder])

    const onOrderHandler = () => {
        setModalOpen(true);
    }

    const onContinueHandler = () => {
        setModalOpen(false);
    };

    const onCancelOrderHandler = () => {
        setModalOpen(false);
    }

    return (
        <div className="Cart">
            <Modal show={modalOpen}>
                <OrderInfo
                    price={orderPrice}
                    onCancel={onCancelOrderHandler}
                    onOrder={onContinueHandler}
                />
            </Modal>

            <Cart
                onOrderHandler={onOrderHandler}
                disabled={disabled}
                cartOrder={cartOrder}
                onCartItemHandler={onCartItemHandler}
                orderPrice={orderPrice}
            />
        </div>
    );
};

export default ShowCart;