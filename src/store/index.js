import { createStore } from 'redux';
//импортируем главный редьюсер
import { reducers} from './reducers'

export const store = createStore(reducers);