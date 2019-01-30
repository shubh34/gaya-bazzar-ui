import React from 'react';
import { Provider } from 'react-redux';
import createStore from '../../store';

const store = createStore(['test']);

const App = () => (
	<Provider store={store}>
		<div>Lets do this</div>
	</Provider>
);

export default App;
