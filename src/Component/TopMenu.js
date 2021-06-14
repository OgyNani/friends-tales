import React from 'react';
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import { connect } from 'react-redux';


import { search } from '../rootReducer';


class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: null};
        this.gotoSearch = this.gotoSearch.bind(this);
    }

    gotoSearch(e) {
        e.preventDefault();
        this.props.onSearch(this.state.text);
    }


    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark" >
                <Container>
                    <Navbar.Brand href="/">
                    <img src="../../logoFTL.png" width="290px" height="40px"  alt="Logo"/>
                    
                    </Navbar.Brand>

                    <Nav.Link href="/friends">Friends</Nav.Link>
                    <Nav.Link href="/tale">Tale</Nav.Link>
                    <Nav.Link href="/films">Films</Nav.Link>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {this.props.myself && <Navbar.Text>
                            <Button variant="outline-primary">{this.props.myself.name} <i class="fas fa-user"></i></Button>
                            <Button variant="outline-secondary" className="ms-1 logout" href="/login" >
                                Logout <i class="fas fa-sign-out-alt"></i>
                            </Button>
                            
                        </Navbar.Text>}
                        {!this.props.myself && 
                        <div className="float-end">
                            <Button 
                                variant="outline-primary" 
                                className={'ms-2'} 
                                href="/login">
                                    Login
                            </Button>
                            <Button 
                                variant="outline-secondary" 
                                className={'ms-2'} 
                                href="/register">
                                    Register
                            </Button>
                        </div>}
                    </Navbar.Collapse>
                </Container>
                
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                {/* <Nav className="mr-auto"> */}
                    {/* <Nav.Link href="/">aaa</Nav.Link>
                    <Nav.Link href="/">aaa</Nav.Link>
                    <Nav.Link href="/">aaa</Nav.Link> */}
                {/* </Nav> */}


                
                {/* </Navbar.Collapse> */}
            </Navbar>
        );
    }
}

const mapStateToProps = state => {
    return { myself: state.myself };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (text) => {
            dispatch(search(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
