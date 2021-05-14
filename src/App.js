import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

import MainPage from './components/Mainpage/MainPage';
import ReactIcons from './components/ReactIcons/ReactIcons';

const App = () => {
  return (
    <Router>
      <Switch>

        <Route path='/' exact > <MainPage /> </Route>
        <Route path='/react-icons'> <ReactIcons /> </Route>

      </Switch>
    </Router>
  );
}

export default App;
