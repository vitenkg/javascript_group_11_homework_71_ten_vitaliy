import React from 'react';

const InputAdminDate = ({onChangeHandler, onSubmitHandler, inputData}) => {
    return (
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
    );
};

export default InputAdminDate;