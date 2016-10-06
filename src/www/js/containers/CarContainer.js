/**
 * Created by dnihalani on 10/4/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {fetchCars, addCar, addCarNameChange,addCarColorChange} from '../actions/carActions';
import AddCar from '../components/AddCar';
import CarList from '../components/CarList';

class CarContainer extends Component {
    componentWillMount() {
        this.props.fetchCars();
    }
    render() {
        const {carList, addCarObj, addCar, addCarNameChange,addCarColorChange} = this.props;
        return (
            <div>
                <AddCar carList={carList} addCarObj={addCarObj} onAddCar={addCar} onColorChange={addCarColorChange} onNameChange={addCarNameChange}

                />
                <CarList carList={carList} />
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        carList: store.carReducer.carList,
        addCarObj: store.carReducer.addCarObj
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCars: () => dispatch(fetchCars()),
        addCar: (carList, addCarObj) => dispatch(addCar(carList, addCarObj)),
        addCarNameChange: (event, addCarObj) => dispatch(addCarNameChange(event, addCarObj)),
        addCarColorChange: (event, addCarObj) => dispatch(addCarColorChange(event, addCarObj))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);
