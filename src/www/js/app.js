import React from 'react';
import { render } from 'react-dom';
//import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

render(
    <div>
        <Root store={store} />
    </div>,
    document.getElementById('root')
);

/*if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        let RootDefault = require('./containers/Root').default; // eslint-disable-line global-require
    render(
    <AppContainer>
    <RootDefault store={store} />
        </AppContainer>,
        document.getElementById('root')
);
});
}*/
