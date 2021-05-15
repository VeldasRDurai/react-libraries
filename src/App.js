import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

import MainPage from './components/Mainpage/MainPage';
import ReactIcons from './components/ReactIcons/ReactIcons';
import ReactToastify from './components/ReactToastify/ReactToastify';

const App = () => {
  return (
    <Router>
      <Switch>

        <Route path='/react-icons'> <ReactIcons /> </Route>
        <Route path='/react-toastify'> <ReactToastify /> </Route>
        <Route path='/' exact > <MainPage /> </Route>

      </Switch>
    </Router>
  );
}

export default App;
