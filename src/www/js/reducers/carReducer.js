/**
 * Created by dnihalani on 10/4/16.
 */
import * as CarActions from '../actions/carActions';
const INITIAL_STATE = {
    addCarObj : {
        name: ''
    },
    carList: []
};

export default function users(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CarActions.FETCH_CARS:
            return Object.assign({}, state, {carList: action.payload});
        case CarActions.ADD_CAR_NAME_CHANGE:
            return Object.assign({}, state, {addCarObj: action.payload});
        case CarActions.ADD_CAR:
            return Object.assign({}, state, {carList: action.payload})
        case  CarActions.ADD_CAR_COLOR_CHANGE:
            return Object.assign({}, state, {addCarObj: action.payload});
        default:
            return state;
    }
}

