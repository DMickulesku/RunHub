import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, FooterTab, Footer, Button, Left, Right, Body, Icon, Text } from 'native-base';
import styles from './Styles';


const Navigation = (props) => {
    return (
      <Footer>
        <FooterTab>
          <Button vertical onPress={props.home}>
            <Icon name="ios-home" />
            <Text>Home</Text>
          </Button>
          <Button vertical onPress={props.events}>
            <Icon name="ios-walk" />
            <Text>Events</Text>
          </Button>
          <Button vertical onPress={props.createEvent}>
            <Icon name="ios-add-circle" />
            <Text>Add Event</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
};

export default Navigation
// constructor () {
//   super();
//   this.state={
//     index: 0,
//   }
// }
//
// render() {
//   let AppComponent = 0;
//
//   if (this.state.index == 0) {
//     AppComponent = <App />
//   }else if (this.state.index == 1) {
//     AppComponent = <Home />
//   }else if (this.state.index == 2) {
//     AppComponent = <EventList />
//   }else if (this.state.index == 3) {
//     AppComponent = <CreateEvent />
//   }
// }
