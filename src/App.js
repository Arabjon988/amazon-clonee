import './App.css';
import Home from './Routers/home pages/Home';
import Login from './Routers/login-pages/Login';
import SignIn from './Routers/h/SignIn'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Footer from './Components/Footer/Footer';
import Cart from './Routers/cart/Cart';

function App() {
  return (
    <Router>
    <div className="app">
    <Switch>
     <Route exact path="/" component={Home}  />
     <Route exact path="/login" component={Login} />
     <Route exact path="/signin" component={SignIn} />
     <Route exact path="/cart" component={Cart} />
     
     </Switch>
     <Footer/>

    </div>
    </Router>
  );
}

export default App;
