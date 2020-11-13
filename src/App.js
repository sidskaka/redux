import './App.css';
import Counter from './components/counter'
import { Provider } from 'react-redux'
import Home from './components/home'
import Potters from './components/potters'
import Teste from './components/testeRedux'
import { store } from './config/store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
      <Router>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/" component={Counter} />
                    <Route path="/home" component={Home} />
                    <Route path="/teste" component={Teste} />
                    <Route path="/potters" component={Potters} />
                </Switch>
            </Provider>
      </Router>
  );
}

export default App;
