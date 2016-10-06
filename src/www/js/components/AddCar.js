/**
 * Created by dnihalani on 10/5/16.
 */
import React, {Component, PropTypes} from 'react';

class AddCar extends React.Component {

    constructor (props){
        super(props);
        // ({addCarObj, carList, onAddCar, onNameChange,onColorChange}) =>
        this.state = {
            name: '',
            color: '',
            year:''
        };

        this.onChange = this.onChange.bind(this);
        this.addCar = this.addCar.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addCar() {
        this.props.onAddCar(this.props.carList, this.state);
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div className="form-group">
                    <label htmlFor="">Name of the Car:</label>
                    <input type="text" name="name" className="form-control"  id="car-name" value={this.state.name} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor>Color:</label>
                    <input type="text" name="color" className="form-control"  id="car-color" value={this.state.color} onChange={this.onChange} />
                </div>
                <label>Add Car:</label>
                <input type="button" className="form-control" value="Add Car" onClick={this.addCar}/>
            </form>
        );
    }

};

AddCar.propTypes = {
    // addCarObj: PropTypes.object.isRequired,
    carList: PropTypes.array.isRequired,
    onAddCar: PropTypes.func.isRequired,
    // onNameChange: PropTypes.func.isRequired,
    // onColorChange:PropTypes.func.isRequired
};

export default AddCar;
