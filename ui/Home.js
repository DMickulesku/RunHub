import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Container, Content, Icon, Button } from 'native-base';
import styles from './Styles';
import Navigation from './Navigation';
import EventList from './EventList';
import Head from './Head';
import RootTabs from './RootTabs';
import CreateEvent from './CreateEvent';
import EventCard from './EventCard';
import HomeEventCard from './HomeEventCard';

// export default class Home extends Component {

const Home = (props) => {
    var viewEvents = props.viewEvents
    var viewHome = props.viewHome
    var viewCreateEvent = props.viewCreateEvent


    return (
      <Container>
      <Head />
      <Content>

      {viewHome &&
        <View>
          <View style={styles.container}>
            <Image
              style={styles.backgroundImage}
              source={require('../images/muddy_trail_run.jpg')} >
              <View style={styles.textBackground}>
                <Text style={styles.homeTitle}> WELCOME, DAN! </Text>
                <Text style={styles.homeText}> Your Schedule: </Text>
              </View>
            </Image>
          </View>
          <View>
          {props.schedule.map((event, index) => {
            return <HomeEventCard key={index}
                              index={index}
                              name={event.name}
                              date={event.date}
                              time={event.time}
                              host={event.host}
                              image={event.image}
                              event={event}
                              removeFromSchedule={props.removeFromSchedule}/>
          })}
          </View>
              <Text style={styles.homeText}> {props.schedule.length === 0 ? 'no events in your schedule' : 'no more events scheduled'}</Text>


        </View>
        }

        {viewEvents &&
          <EventList  addToSchedule={props.addToSchedule}/>
        }

        {viewCreateEvent &&
          <CreateEvent home={props.home}/>
        }
      </Content>

      <Navigation home={props.home}
                  events={props.events}
                  createEvent={props.createEvent}/>
      </Container>
    )
}

export default Home
