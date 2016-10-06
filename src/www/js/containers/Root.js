import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import CarContainer from './CarContainer';

const Root = ({ store }) =>
<Provider store={store}>
    <CarContainer />
    </Provider>;


Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;

