import { Form, Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import React from "react";



class Friends extends React.Component {
    render() {
        return (
            <Container className="mt-2">
                <Row>
                    <Col>
                        <h2>My friends (9)</h2>
                    </Col>
                    <Col>
                        <h2>Search friends</h2>
                    </Col>
                </Row>
                
                <Row>
                    <Col>     
                        <div className="mt-2" >
                            <div>
                                <div className="tab-pane fade active show" id="profile-friends">
                                       
                                    <ul className="friend-list clearfix" style={{display: 'inline-block'}}>
                                        <li>
                                            <a href="#">
                                                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                                                <div className="friend-info">
                                                    <h4>Sancho Aldo</h4>
                                                    <p>392 friends</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></div>
                                                <div className="friend-info">
                                                    <h4>Jonty Augusto</h4>
                                                    <p>128 friends</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" /></div>
                                                <div className="friend-info">
                                                    <h4>Androkles Allen</h4>
                                                    <p>12 friends</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" /></div>
                                                <div className="friend-info">
                                                    <h4>Ithamar Silvio</h4>
                                                    <p>1,923 friends</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" /></div>
                                                <div className="friend-info">
                                                    <h4>Denzel Annas</h4>
                                                    <p>893 friends</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" /></div>
                                                <div className="friend-info">
                                                    <h4>Kamil Cree</h4>
                                                    <p>983 friends</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="" /></div>
                                                <div className="friend-info">
                                                    <h4>Fritjof Inderjit</h4>
                                                    <p>3,321 friends</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" /></div>
                                                <div className="friend-info">
                                                    <h4>Sushil Trygve</h4>
                                                    <p>921 friends</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                                                <div className="friend-info">
                                                    <h4>Frans Gebhard</h4>
                                                    <p>944 friends</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                                                <div className="friend-info">
                                                    <h4>Frans Gebhard</h4>
                                                    <p>944 friends</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                                                <div className="friend-info">
                                                    <h4>Frans Gebhard</h4>
                                                    <p>944 friends</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                                                <div className="friend-info">
                                                    <h4>Frans Gebhard</h4>
                                                    <p>944 friends</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                                                <div className="friend-info">
                                                    <h4>Frans Gebhard</h4>
                                                    <p>944 friends</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                 </div>
                            </div>
                        </div>         
                    </Col>
                    <Col>
                    <Form style={{display: 'inline-block'}} className="mr-5 mt-2">
                            <InputGroup classNameName="mb-2">
                                <Button variant="outline-dark">Search</Button>
                                <FormControl 
                                    type="text" 
                                    placeholder=" Search for friends?" 
                                    classNameName="mr-sm-2" />
                            </InputGroup>
                        </Form>
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
(Friends);