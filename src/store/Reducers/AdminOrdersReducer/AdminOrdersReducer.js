import {
    FETCH_ORDER_FAILURE,
    FETCH_ORDER_REQUEST,
    FETCH_ORDER_SUCCESS
} from "../../Actions/MenuAdminAction/OrdersAdminAction/OrdersAdminAction";

const initialState = {
    loading: false,
    orders: [],
    error: null,
};

const AdminOrdersReducer = (state = initialState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case FETCH_ORDER_REQUEST:
            return {...state, error: null, loading: true};
        case FETCH_ORDER_SUCCESS:
            return {...state, loading: false, orders: payload};
        case FETCH_ORDER_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default AdminOrdersReducer;