import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginPageComponent from "./Component/LoginPageComponent";
import RegisterPageComponent from "./Component/RegisterPageComponent";
import Home from "./Component/Home";
import TopMenu from "./Component/TopMenu";
import history from "./history";
import Friends from "./Component/Friends";
import Films from "./Component/Films";
import Tale from "./Component/Tale";


function App() {
  return (
    <Router history={history}>
      <TopMenu />

      <Switch>
        <Route path="/login">
          <LoginPageComponent />
        </Route>
        <Route path="/register">
          <RegisterPageComponent />
        </Route>
        <Route path="/friends">
          <Friends />
        </Route>
        <Route path="/tale">
          <Tale />
        </Route>
        <Route path="/films">
          <Films />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

{/*       

      <footer className={"footer mt-4 pt-4 bg-dark text-white"}>
          <div className="container">
              <div className="row">
                  <div className="footer-col">
                      <h4>Friendstale</h4>
                      <ul>
                          <li><a href="/">About us</a></li>
                          <li><a href="/">Social</a></li>

                      </ul>
                  </div>
              </div>
          </div>
        </footer> */}

        
      {/* 
      Спсок фильмов (Tales)
      Feed
       */}

    </Router>
  );
}

export default App;
