/**
 * Created by dnihalani on 10/4/16.
 */
export const FETCH_CARS = 'FETCH_CARS';
export const ADD_CAR = 'ADD_CAR';
export const ADD_CAR_NAME_CHANGE = 'ADD_CAR_NAME_CHANGE';
export const  ADD_CAR_COLOR_CHANGE = 'ADD_CAR_COLOR_CHANGE';
export function fetchCars() {
    const carList = [
        /*{id: 1, name: "Honda", color: "red"},
        {id: 2, name: "Toyota", color: "blue"}*/
    ];
    return {
        type: FETCH_CARS,
        payload: carList
    };
}
export function addCar(carList, addCarObj) {
    let newCarList = carList.slice();
    if(addCarObj.name.trim() != ""){
        newCarList.push({
            id : findNextId(carList),
            name: addCarObj.name,
            color: addCarObj.color
        });
    }
    return {
        type: ADD_CAR,
        payload: newCarList
    };
}
export function addCarNameChange(event, addCarObj) {
    let newAddCarObj = Object.assign({}, addCarObj, {});
    newAddCarObj.name = event.target.value;
    return {
        type: ADD_CAR_NAME_CHANGE,
        payload: newAddCarObj
    };
}
export function addCarColorChange(event, addCarObj) {
    let newCarObj = Object.assign({}, addCarObj, {});
    newCarObj.color = event.target.value;
    return {
        type: ADD_CAR_COLOR_CHANGE,
        payload: newCarObj
    };
}
function findNextId(carList) {
    var ids = carList.map(function(car){
       return car.id;
    });
    return Math.max(...ids) + 1;
}