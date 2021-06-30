import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers'
import CustomTable from './customTable';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <CustomTable />
  </Provider>
);

render(<App />, document.getElementById('root'));
