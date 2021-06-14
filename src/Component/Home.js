import { Container } from "react-bootstrap";
import { connect } from "react-redux";
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
