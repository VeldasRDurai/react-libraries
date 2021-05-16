import React from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

import MainPage from './components/Mainpage/MainPage';
import ReactIcons from './components/ReactIcons/ReactIcons';
import ReactToastify from './components/ReactToastify/ReactToastify';
import ReactModal from './components/ReactModal/ReactModal';
import ReactToolTip from './components/ReactToolTip/ReactToolTip';
import ReactCountUp from './components/ReactCountUp/ReactCountUp';

const App = () => {
  return (
    <Router>
      <Switch>

        <Route path='/react-icons'> <ReactIcons /> </Route>
        <Route path='/react-toastify'> <ReactToastify /> </Route>
        <Route path='/react-modal' > <ReactModal /> </Route>
        <Route path='/react-tool-tip' > <ReactToolTip /> </Route>
        <Route path='/react-count-up' > <ReactCountUp /> </Route>
        <Route path='/' exact > <MainPage /> </Route>

      </Switch>
    </Router>
  );
}

export default App;
