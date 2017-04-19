// Actions
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = data => ({
  type: INCREMENT,
  payload: data,
});
export const decrement = data => ({
  type: DECREMENT,
  payload: data,
});
