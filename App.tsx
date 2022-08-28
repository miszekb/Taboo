import React from 'react';
import useCachedResources from './hooks/useCachedResources';

import MenuView from './views/MenuView/MenuView';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './store/reducers/reducers';
import middleware from './store/middleware';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const store = createStore(reducer, middleware);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <MenuView/>
      </Provider>
    );
  }
}
