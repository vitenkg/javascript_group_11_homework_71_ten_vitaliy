import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../Components/UI/Spinner/Spinner";
import {fetchMenu} from "../../store/Actions/MenuAction/Menu";
import {changeValue, fetchChangeData} from "../../store/Actions/MenuAdminAction/MenuAdminAction";
import './ShowAdminMenu.css';

const ShowAdminMenu = props => {
    const dispatch = useDispatch();
    const menu = useSelector(state => state.adminMenuList.menu);
    const loading = useSelector(state => state.adminMenuList.loading)

    useEffect(() => {
        dispatch(fetchMenu());
    }, [dispatch]);

    const onSubmitHandler = (e, id, name, price) => {
        e.preventDefault();
        dispatch(fetchChangeData({id, name, price}));
    };

    const onChangeHandler = (e, id) => {
        let {name, value} = e.target;
        if (name === 'price') {
            value = parseInt(value);
        }
        dispatch(changeValue({name, value, id}));
    }

    let components = (
        <fieldset>
            <legend>MENU</legend>
            <ul className="EditMenu">
                {menu.map(item => (
                    <li
                        key={item.id}
                        className="EditList"
                    >
                        <form onSubmit={e => onSubmitHandler(e, item.id, item.name, item.price)}>
                            <p className="Img"><img src={item.url} alt="menu" width="150"/></p>
                            <div className="ListInner">
                                <input
                                    type="text"
                                    name="name"
                                    value={item.name}
                                    onChange={e => onChangeHandler(e, item.id)}
                                />
                                <input
                                    type="text"
                                    name="price"
                                    value={item.price}
                                    onChange={e => onChangeHandler(e, item.id)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="BtnAdd"
                            >
                                редактировать
                            </button>
                        </form>
                    </li>
                ))}
            </ul>
        </fieldset>
    );

    if (loading) {
        components = (
            <Spinner/>
        )
    }

    return (
        <div className="EditMenuAdmin">
            {components}
        </div>
    )
};

export default ShowAdminMenu;