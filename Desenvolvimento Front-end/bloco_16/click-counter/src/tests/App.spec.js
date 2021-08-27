import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

import { createStore, combineReducers } from 'redux';
import clickReducer from '../redux/reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

const click = 'Clique aqui';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText(click);

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });

  test('start with 0 and countdown up with click', () => {
    const { queryByText } = renderWithRedux(<App />);
    expect(queryByText('0')).toBeInTheDocument();
    
    const buttonAdd = queryByText(click);
    expect(buttonAdd).toBeInTheDocument();
    
    userEvent.click(buttonAdd);
    expect(queryByText('1')).toBeInTheDocument();
  });
  
  test('a click in a button should increment the value of clicks in the global state', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    expect(queryByText('10')).toBeInTheDocument();
    
    const buttonAdd = queryByText(click);
    expect(buttonAdd).toBeInTheDocument();
    
    userEvent.click(buttonAdd);
    expect(queryByText('11')).toBeInTheDocument();
  });
});