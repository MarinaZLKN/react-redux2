
import {profileActionTypes} from './actions'

//изначальное состояние = null
const initialState = {
    profile: null,
    theme: 'light'
}

//ф-я редьюсера, которая будет менять состояние в зависимости от того, какой action в нее прилетит
//сначала передваем изначальный state, по умолчанию и action
export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        //передаем тип экшена
        case profileActionTypes.SET_PROFILE:
            //возвращаем state и данные
            // в payload передаются данные о профиле, кторые будут заполняться
            return {...state, profile: action.payload}

        case profileActionTypes.SET_THEME:
            return {...state, theme: action.payload}
        default :
            // по дефолтку всегда возвращаем state
            return state
    }
}