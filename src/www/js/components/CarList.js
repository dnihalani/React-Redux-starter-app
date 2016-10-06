/**
 * Created by dnihalani on 10/4/16.
 */
import React, {Component, PropTypes} from 'react';

const CarList = ({carList}) => {
    return (
        <div>
            <h3>Car List Component</h3>
            <ul>
            {carList.map(car => (
               <li key={car.id}>
                    <h4>{car.name}</h4>
                    <p>car.color</p>
                    <h3>car.year</h3>
                </li>
            ))}
            </ul>
        </div>
    );
};

CarList.propTypes = {
    carList: PropTypes.array.isRequired
};

export default CarList;