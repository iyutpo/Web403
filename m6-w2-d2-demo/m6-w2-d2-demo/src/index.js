import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'

import store from './store';
import { fetchTodos } from './features/todos/todosSlice';
import './api/server'


store.dispatch(fetchTodos())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
)
