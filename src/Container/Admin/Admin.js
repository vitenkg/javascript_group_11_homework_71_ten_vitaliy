import React, {useState} from 'react';
import './Admin.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../store/Actions/MenuAdminAction/MenuAdminAction";
import ShowMenu from "../../Components/ShowMenu/ShowMenu";

const Admin = () => {
    const dispatch = useDispatch();
    // const menu = useSelector(state => state.menuList);
    const [inputData, setInputData] = useState({
        name: '',
        price: 0,
        url: '',
    });

    const onChangeHandler = e => {
        const {name, value} = e.target;
        setInputData(prevState => ({
            ...prevState,
                [name]: value
        }));
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        dispatch(fetchData(inputData));
    };

    console.log(inputData);
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>
                    Введите название Блюда
                    <input
                        type="text"
                        name="name"
                        value={inputData.name}
                        onChange={onChangeHandler}
                    />
                </label>
                <label>
                    Введите стоимость
                    <input
                        type="text"
                        name="price"
                        value={inputData.price}
                        onChange={onChangeHandler}
                    />
                </label>
                <label>
                    Введите URL фото Блюда
                    <input
                        type="text"
                        name="url"
                        value={inputData.url}
                        onChange={onChangeHandler}
                    />
                </label>
                <button type="submit">Добавить</button>
            </form>
            <ShowMenu/>
        </div>
    );
};

export default Admin;