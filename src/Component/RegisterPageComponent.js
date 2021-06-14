import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { ajax } from 'rxjs/ajax';
import history from '../history';


class RegisterPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {registerNickname: null, registerEmail: null, registerPassword: null};
        this.doRegister = this.doRegister.bind(this);
    }
    
    doRegister(e) {
        e.preventDefault();

        ajax({
            url: 'http://simple-bo.com/api/public/register',
            method: 'POST',
            crossDomain: true,
            headers: {'Content-Type': 'application/json'},
            body: {
                name: this.state.registerNickname,
                email: this.state.registerEmail, 
                password: this.state.registerPassword,
            }
        }).subscribe(
            res => {
                history.push("/login");
            },
            err => console.error(err)
        );
    }

    render() {
        return (
            <div style={{backgroundImage: `url("https://cdn.wallpapersafari.com/64/93/Skb6ZX.jpg")`}}> 
            <div className="row mt-5">
                <div className="col-md-3 col-sm-2 col-xs-1"></div>
                <div className="col-md-6 col-sm-8 col-xs-10 mt-5 mb-5">
                    <h1>Register</h1>
                    <Form>
                        <Form.Group controlId="formBasicNickname">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control 
                            type="nickname" 
                            placeholder="Enter nickname" 
                            onChange={e => this.setState({ registerNickname: e.target.value })}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Login</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            onChange={e => this.setState({ registerEmail: e.target.value })}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Enter Password" 
                            onChange={e => this.setState({ registerPassword: e.target.value })}/>
                        </Form.Group>

                        <Button 
                            variant="outline-dark" 
                            type="submit" 
                            className={'mr-2 mt-2'}
                            onClick={this.doRegister}>
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col-md-3 col-sm-2 col-xs-1"></div>
            </div>
            </div>
        );
    }
  }
  
  export default RegisterPageComponent;