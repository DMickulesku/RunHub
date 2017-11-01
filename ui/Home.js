import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import styles from './Styles';
import Navigation from './Navigation';
import EventList from './EventList';
import Head from './Head';
import RootTabs from './RootTabs';
import CreateEvent from './CreateEvent';

// export default class Home extends Component {

const Home = (props) => {
    var viewEvents = props.viewEvents
    var viewHome = props.viewHome
    var createEvent = props.createEvent
    console.log(props);

    return (
      <Container>
      <Head />
        <Content>
          <View style={styles.container}>

            {viewHome &&
              <Image
                style={styles.backgroundImage}
                source={require('../images/muddy_trail_run.jpg')} >
                <View style={styles.textBackground}>
                  <Icon name='ios-contact' />
                  <Text style={styles.homeTitle}> WELCOME, DAN! </Text>
                  <Text style={styles.homeText}> Your Schedule: </Text>
                </View>
              </Image>
            }
          </View>

          {viewEvents &&
            <EventList />
          }

          {createEvent &&
            <CreateEvent />
          }

        </Content>
      <Navigation home={props.home}
                  events={props.events}
                  createEvent={props.createEvent}/>
      </Container>
    )
}

export default Home
