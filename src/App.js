import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store'
import { Provider } from 'react-redux'

import LogIn from './components/log-in/log-in'
import Magazine from './components/magazine/magazine';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/log-in'>
              <LogIn></LogIn>
            </Route>
            <Route path='/magazine'>
              <Magazine></Magazine>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
