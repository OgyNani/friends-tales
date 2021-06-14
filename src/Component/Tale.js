import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Card, Label, Icon, Divider,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import moment from 'moment';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

class Tale extends Component {



    render() {
      
      const {
        direction, icon, title, time, description, tags, labelColor, lineHeight = 4, lineColor = 'grey', color = 'grey'
      } = this.props;
      const textAlign = direction === 'left' ? 'right' : 'left';
      
      
  
      const isMobile = window.innerWidth <= 768;
      const height = isMobile ? `${lineHeight * 350}px` : `${lineHeight * 250}px`;
  
      return (
        <div>
          
          <Grid>
            <Grid.Row>
              <Grid.Column>
              <Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="11/2010 – Present"
    style={{ color: '#e86971' }}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="04/2009 – 11/2010"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
    <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText="08/2008 – 11/2008"
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="08/2008 – 11/2008"
    dateInnerStyle={{ background: '#76bb7f' }}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
</Timeline>
              </Grid.Column>
            </Grid.Row>
            
          </Grid>
        </div>
      );
    }
  }
  
  Tale.propTypes = {
    direction: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    time: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
  };
  
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

export default (Tale);


