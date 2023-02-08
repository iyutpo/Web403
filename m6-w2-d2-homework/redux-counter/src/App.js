import Counter from './Counter';
import {Provider} from 'react-redux';
import { createStore} from 'redux';


const initialState = {
  count: 0
};


function reducer(state=initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      state.count++;
      return state;
    case 'DECREMENT':
      state.count--;
      return state;
    default:
      return state;
  }
}


const store = createStore(reducer);


const App = () => {
  <Provider store={store}>
    <Counter />
  </Provider>
}