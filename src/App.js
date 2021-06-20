import React from 'react';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux';
import { ajax } from 'rxjs/ajax';
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
import {saveMyself} from "./rootReducer";

class App extends React.Component {

  async checkLoginStatus() {
    const token = localStorage.getItem('token');

    if (!token) {
      this.setState({
        isLoggedIn: false,
        myselfLoading: false,
        myself: {}
      });
      return;
    }

    if (!this.props.myself)  {
      this.setState({
        isLoggedIn: false,
        myselfLoading: true,
        myself: {},
      });

      await ajax({
          url: 'http://simple-bo.com/api/get-myself',
          method: 'GET',
          crossDomain: true,
          headers: {Authorization: `Bearer ${token}`}
        })
        .subscribe(
            res => {
              this.setState({
                isLoggedIn: true,
                myselfLoading: false,
              });
              this.props.saveMyself(res.response.data);
            },
            err => {
              console.error(err);
              this.setState({
                isLoggedIn: false,
                myselfLoading: false,
                myself: {},
              });
            }
        );

      return;
    }

    this.setState({
      isLoggedIn: true,
      myselfLoading: false,
    });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
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
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { myself: state.myself };
};

const mapDispatchToProps = dispatch => {
  return {
    saveMyself: data => {
      dispatch(saveMyself(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
