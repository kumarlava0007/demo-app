import Counter from './Components/Counter/Counter';
import User from './Components/UserComponent/User';
import Main from './Components/Main/Main';
import Post from './Components/Context/Post';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="body1">
      < Router >
        < NavBar />
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/counter" component={Counter}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/post" component={Post}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
