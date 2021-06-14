import { Container, Row, Card, CardGroup, Col } from "react-bootstrap";
// import ProductList from "./ProductList";
// import Contactus from "./Contactus";
import { connect } from "react-redux";
import { selectCategory } from "../rootReducer";
import React from "react";
import MostRecomendedFilms from "./MostRecomendedFilms";


class Home extends React.Component {
    render() {
        return (
            <Container>
               <MostRecomendedFilms />
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
(Home);
