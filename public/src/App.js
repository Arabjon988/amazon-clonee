import './App.css';
import Home from './Routers/home pages/Home';
import Login from './Routers/login-pages/Login';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="app">
    <Switch>
     <Route exact path="/" component={Home}  />
     <Route exact path="/login" component={Login} />
     </Switch>

    </div>
    </Router>
  );
}

export default App;
