import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import Contact from './components/Contact';
import Civilizations from './components/Civilizations';
import Home from './components/Home';
import Civilization from './components/Civilization';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="container mt-3">
        {/* <Navbar /> */}
        
        <div className="tabs is-toggle is-toggle-rounded">
          <ul>
            <li className="">
              <NavLink to="/" activeClassName="is-active">
                <span className="icon is-small"><i className="fa fa-home"></i></span>
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/civilizations" activeClassName="is-active">
                <span className="icon is-small"><i className="fa fa-refresh"></i></span>
                  Civilizations
              </NavLink>
            </li>
            <li className="">
              <NavLink to="/contact" activeClassName="is-active">
                <span className="icon is-small"><i className="fa fa-envelope"></i></span>
                  Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <hr />

        <Switch>
          <Route path="/civilization/:id">
            <Civilization />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/civilizations">
            <Civilizations />
          </Route>
          <Route path="/" /* exact */>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
