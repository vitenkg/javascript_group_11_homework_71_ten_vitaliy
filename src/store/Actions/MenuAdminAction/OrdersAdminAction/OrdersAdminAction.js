import axiosApi from "../../../../axiosApi";

export const FETCH_ORDER_REQUEST = 'FETCH_TODO_REQUEST';
export const FETCH_ORDER_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_ORDER_FAILURE = 'FETCH_TODO_FAILURE';


export const fetchOrderRequest = () => ({type: FETCH_ORDER_REQUEST});
export const fetchOrderSuccess = data => ({type: FETCH_ORDER_SUCCESS, payload: data});
export const fetchOrderFailure = () => ({type: FETCH_ORDER_FAILURE});



export const fetchDataOrdersList = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchOrderRequest());
            const response = await axiosApi.get('/pizza/orders.json');
            const data = Object.keys(response.data).map(type => {
                return {id: type, customer: response.data[type].customer, order: response.data[type].order}
            });
            console.log(data);
            dispatch(fetchOrderSuccess(data));
        } catch (e) {
            dispatch(fetchOrderFailure())
        }
    };
};