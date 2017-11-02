import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import styles from './Styles';
import Navigation from './Navigation';
import EventList from './EventList';
import Head from './Head';
import RootTabs from './RootTabs';
import CreateEvent from './CreateEvent';

// export default class Home extends Component {

const EventCard = (props) => {
  var image = '../images/centennial_cone.png'

    return (
      <Card>
        <CardItem>
          <Left>
            <Icon name="ios-walk" />
            <Body>
              <Text>{props.name}</Text>
              <Text note>{props.date} {props.time}</Text>
            </Body>
          </Left>
          <Right>
          <Button data-event-name={props.name} onPress={props.removeFromSchedule.bind(null, props.event)}>
            <Icon name="ios-remove-circle" />
          </Button>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image source={props.image}
          style={{height: 200, flex: 1}}/>
        </CardItem>
        <Body>
          <Text style={{fontSize: 8}}> Hosted by {props.host} </Text>
        </Body>
      </Card>
    )
}

export default EventCard
