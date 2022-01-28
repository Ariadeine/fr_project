import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import Basket from './components/Basket';
import OrderCompleted from './components/OrderCompleted';

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Nav></Nav>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/basket" exact component={Basket} />
            <Route path="/order-completed" exact component={OrderCompleted} />
            <Route component={NotFound}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
