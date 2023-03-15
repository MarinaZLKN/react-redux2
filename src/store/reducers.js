//здесь будем собирать все редьюсеры в один

import {combineReducers} from 'redux';
import {profileReducer as profile} from "./profile";

//создаем один обший редьюсер, в которыц передаем наши редьюсеры
export const reducers = combineReducers({
    profile
})