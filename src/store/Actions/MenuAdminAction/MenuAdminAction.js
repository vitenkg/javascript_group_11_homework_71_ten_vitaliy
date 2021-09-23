import axiosApi from "../../../axiosApi";

export const FETCH_MENU_REQUEST = 'FETCH_TODO_REQUEST';
export const FETCH_MENU_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_TODO_FAILURE';

export const fetchMenuRequest = () => ({type: FETCH_MENU_REQUEST});
export const fetchMenuSuccess = data => ({type: FETCH_MENU_SUCCESS, payload: data});
export const fetchMenuFailure = () => ({type: FETCH_MENU_FAILURE});

export const fetchData = (data) => {
    return async () => {
        console.log(data);
        try {
            await axiosApi.post('pizza/menu.json', data);
        } catch (e) {

        }
    }
};