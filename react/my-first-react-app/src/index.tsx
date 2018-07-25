import './index.css';

import registerServiceWorker from './registerServiceWorker';

import Hello from "./containers/Hello"

import { createStore } from 'redux';

import { enthusiasm } from './reducers/index';

import { EnthusiasmAction } from "./actions";

import { IStoreState } from './types/index';

import { Provider } from 'react-redux';

import * as React from 'react';

import * as ReactDOM from 'react-dom';

const store = createStore<IStoreState, EnthusiasmAction, null, null>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
});
ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
