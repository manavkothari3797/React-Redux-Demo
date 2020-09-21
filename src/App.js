import React from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import { history, store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Switch>
            <Route path='/' render={() => <Redirect to='/dashboard' />}></Route>
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
