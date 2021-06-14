import { Row, Col, CardGroup, Card } from "react-bootstrap";
import React from 'react';
import { connect } from "react-redux";

class MostRecomendedFilms extends React.Component {
    render() {
      return (
        <Row>
            <Col className="mt-4">
            <h2>Most recommended</h2>
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
      );
    }
}

const mapStateToProps = state => {
  return { 
    category: state.category,  
    text: state.text
  };
};

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MostRecomendedFilms);




 