import { Container, Row, Col, Nav, CardGroup, Card } from "react-bootstrap";
import { connect } from "react-redux";
import React from "react";

class Films extends React.Component {
    render() {
        return (
            <Container className="mt-2">
                <Row>
                    <Col xs={3}>
                    <Nav defaultActiveKey="/films/anime" className="flex-column">
                        <Nav.Link href="/films/anime">Anime</Nav.Link>
                        <Nav.Link href="/films/action">Action</Nav.Link>
                        <Nav.Link href="/films/comedy">Comedy</Nav.Link>
                        <Nav.Link href="/films/romantic">Romantic</Nav.Link>
                    </Nav>
                    </Col>
                    <Col>
                    <CardGroup className="mt-2 p-1">
                    <Card className="p-1">
                        <Card.Img variant="top"  src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="p-1">
                        <Card.Img variant="top"  src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>  
                        </Card.Body>
                    </Card>
                    <Card className="p-1">
                        <Card.Img variant="top"  src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>            
                        </Card.Body>                 
                    </Card>
                    <Card className="p-1">
                        <Card.Img variant="top"  src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>                 
                        </Card.Body>                
                    </Card>
                    <Card className="p-1">
                        <Card.Img variant="top" src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500" />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>                    
                    </Card>
                    </CardGroup>
                    </Col>
                </Row>
            </Container>
            
        );
    }
}

const mapStateToProps = state => {
    return { 
        // myself: state.myself 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onSelectCategory: (id, count) => {
            // dispatch(selectCategory(id, count))
        // }
    }
}

export default 
connect(mapStateToProps, mapDispatchToProps)
(Films);