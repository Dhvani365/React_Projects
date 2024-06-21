// Step-1: Creating Store
// Step-2: Creating Slice
// Step-3: Import reducers
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/todoSlice';

const store = configureStore({
    reducer: todoReducer
});

export default store;