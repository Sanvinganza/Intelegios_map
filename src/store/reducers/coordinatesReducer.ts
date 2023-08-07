import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = { value: 0 } as any;
const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const incrementByAmount = createAction<number>('counter/incrementByAmount')

const coordinatesReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(increment, (state, action) => {
        state.value++
      })
      .addCase(decrement, (state, action) => {
        state.value--
      })
      .addCase(incrementByAmount, (state, action) => {
        state.value += action.payload
      })
  });
  
export default coordinatesReducer;