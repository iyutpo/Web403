import { configureStore} from '@reduxjs/toolkit';

import todosReducer from './features/todos/todosSlice';
import filetersReducer from './features/filters/filtersSlice';

const store = configureStore({
    reducer: {
        // Define a top-level state field named todos, handled by todosReducer
        todos: todosReducer,
        filters: filetersReducer,
    },
})

export default store;