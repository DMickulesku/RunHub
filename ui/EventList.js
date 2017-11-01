import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import styles from './Styles';
import axios from 'axios';
import Iframe from 'react-iframe'
import EventCard from './EventCard'

class EventList extends Component {
  constructor (props) {
    super(props)
    this.state= {
      events: [{
        name: 'Centennial Cone',
        date: '11/5/2017',
        time: '7:15AM',
        host: 'Dan M',
        image: require('../images/centennial_cone.png')
      }, {
        name: 'Park Hill/ Stapleton Loop',
        date: '11/10/2017',
        time: '6:15PM',
        host: 'Dan M',
        image: require('../images/Park_Hill_Stapleton.png')
      }, {
        name: 'Bergen Peak',
        date: '11/14/2017',
        time: '8:00AM',
        host: 'Denver Trail Runners Run Club',
        image: require('../images/bergen_peak.png')
      }, {
        name: 'Red Hot 33K',
        date: '02/17/2018',
        time: '8:30AM',
        host: 'Grass Roots Events',
        image: require('../images/red_hot_33k.png')
      }]
    }
  }

  // componentWillMount() {
  //   axios.get('https://boiling-ravine-75542.herokuapp.com/')
  //     .then(respose => console.log(response));
  // }



  addToSchedule(index) {
    console.log('hello');
    console.log(index);
  }

  render() {

    return (
      <Container style={{padding: 10}}>
        <Content styles={styles.cardContent}>
            <Text style={styles.homeText}> Upcoming Events </Text>


            {this.state.events.map((event, index) => {
              return <EventCard key={index}
                                index={index}
                                name={event.name}
                                date={event.date}
                                time={event.time}
                                host={event.host}
                                image={event.image}
                                event={event}
                                addToSchedule={this.props.addToSchedule}/>

            })}

        </Content>
      </Container>
    );
  }
};

export default EventList;
