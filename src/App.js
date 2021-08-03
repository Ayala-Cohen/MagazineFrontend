import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store'
import { Provider } from 'react-redux'

import LogIn from './components/log-in/log-in'



function App() {
  return (
    <>
      <Provider store={store}>
        <LogIn></LogIn>
      </Provider>
    </>
  );
}

export default App;
