import React, {useState} from 'react';
import './Admin.css';
import {useDispatch} from "react-redux";
import {fetchData} from "../../store/Actions/MenuAdminAction/MenuAdminAction";
import ShowAdminMenu from "../ShowAdminMenu/ShowAdminMenu";
import {fetchMenu} from "../../store/Actions/MenuAction/Menu";
import InputAdminDate from "../../Components/InputAdminDate/InputAdminDate";
import ShowOrders from "../../Components/ShowOrders/ShowOrders";

const Admin = () => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState({
        name: '',
        price: 0,
        url: '',
    });

    const onChangeHandler = e => {
        let {name, value} = e.target;
        if (name === 'price') {
            value = parseInt(value);
        }
        setInputData(prevState => ({
            ...prevState,
                [name]: value
        }));
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        dispatch(fetchData(inputData));
        setInputData({
            name: '',
            price: 0,
            url: '',
        });
        dispatch(fetchMenu());
    };

    return (
        <div>
            <InputAdminDate
                onSubmitHandler={onSubmitHandler}
                onChangeHandler={onChangeHandler}
                inputData={inputData}
            />
            <ShowAdminMenu
                renew={inputData}
            />

            <ShowOrders/>
        </div>
    );
};

export default Admin;