import React, {useEffect} from 'react';
import './ShowOrders.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchDataOrdersList} from "../../store/Actions/MenuAdminAction/OrdersAdminAction/OrdersAdminAction";

const ShowOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.adminOrders.orders);
    const menu = useSelector(state => state.menuList.menu);

    useEffect(() => {
        dispatch(fetchDataOrdersList());
    }, [dispatch]);



    return (
        <div>
            <ul>
                {orders.map(item => (
                    <li key={item.id}>
                        {/*<p>{item.order}</p>*/}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowOrders;