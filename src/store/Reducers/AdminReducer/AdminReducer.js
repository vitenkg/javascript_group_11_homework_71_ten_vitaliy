import {
    CHANGE_VALUE,
    FETCH_MENU_FAILURE,
    FETCH_MENU_REQUEST,
    FETCH_MENU_SUCCESS
} from "../../Actions/MenuAdminAction/MenuAdminAction";


const initialState = {
    loading: false,
    menu: [],
    error: null,
};

const AdminReducer = (state = initialState, action) => {
    const payload = action.payload;
    // console.log(payload);
    switch (action.type) {
        case CHANGE_VALUE:
            const newState = [...state.menu];
            const newMenu = newState.map(item => {
                if (item.id === payload.id) {
                    return {...item, [payload.name]: payload.value}
                }
                return item;
            })
            return {...state, menu: newMenu};
        case FETCH_MENU_REQUEST:
            return {...state, error: null, loading: true};
        case FETCH_MENU_SUCCESS:
            return {...state, loading: false, menu: payload};
        case FETCH_MENU_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default AdminReducer;