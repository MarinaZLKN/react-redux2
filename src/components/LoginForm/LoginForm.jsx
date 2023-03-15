import React from 'react';
import {useDispatch} from 'react-redux'
import {profileActions} from "../../store/profile";

export const LoginForm =() => {
    const dispatch = useDispatch();

    const handleSubmit = (event)=> {
        //приостанавливаем действия формы, чобы она не отправлялась
        event.preventDefault();
        //получаем саму форму
        const form = event.currentTarget;

        //с помощью dispatch'а и SET_PROFILE зададим данные о профиле
        const profile = {
            //вытаскиваем значения и передаем в переменные
            name: form['name'].value,
            lastname: form['lastname'].value
        }

        //в dispatch передеам actionCreator, берем конкретный action и передаем в него данные, которые положили в profile
        dispatch(profileActions.setProfile(profile));
    }

    return(
        //функцию передаем в форму при нажатии на кнопку
        <form className="form form-login" onSubmit={handleSubmit}>
            <div className="field">
                <input type="text" name="name" autoComplete="off" />
            </div>
            <div className="field">
                <input type="text" name="lastname" autoComplete="off" />
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    )
}
export default LoginForm;