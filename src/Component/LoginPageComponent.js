import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ajax } from 'rxjs/ajax';
import history from '../history';

class LoginPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loginEmail: null, loginPassword: null, token: null, myself: null};
        this.doLogin = this.doLogin.bind(this);
    }

    doLogin(e) {
        e.preventDefault();

        ajax({
            url: 'http://simple-bo.com/api/auth',
            method: 'POST',
            crossDomain: true,
            headers: {'Content-Type': 'application/json'},
            body: {email: this.state.loginEmail, password: this.state.loginPassword}
        }).subscribe(
            res => {
                const token = res.response.token;
                localStorage.setItem('token', token);
                history.push("/");
            },
            err => console.error(err)
        );
    }

    gotoRegister(e) {
        e.preventDefault();
        history.push("/register");
    }

    render() {
        return (
            <div style={{backgroundImage: `url("https://cdn.wallpapersafari.com/64/93/Skb6ZX.jpg")`}}> 
            <div className="row mt-5" >
                <div className="col-md-3 col-sm-2 col-xs-1"></div>
                <div className="col-md-6 col-sm-8 col-xs-10 mt-5 mb-5">
                    <h1>Login</h1>
                    <Form>
                        <div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Login</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            onChange={e => this.setState({ loginEmail: e.target.value })}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            onChange={e => this.setState({ loginPassword: e.target.value })}/>
                        </Form.Group>
                        <Button 
                            variant="outline-dark" 
                            type="submit" 
                            className={'mr-2 mt-2'}
                            onClick={this.doLogin}>
                            Submit
                        </Button>
                        <Button 
                        variant="outline-dark" 
                        className={'ms-2 mt-2'}
                        type="submit" 
                        onClick={this.gotoRegister}>
                            Register
                        </Button>
                        </div>
                    </Form>
                </div>
                <div className="col-md-3 col-sm-2 col-xs-1"></div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { myself: state.myself };
};

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent);
