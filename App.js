import Expo from 'expo';
import React, { Component } from 'react';
import { Image, Text, View, AppRegistry, Linking } from 'react-native';
import { Container, Content,  Button, FooterTab, Footer, Left, Right, Body, Icon } from 'native-base';
import TabNavigator from 'react-navigation';
import styles from './ui/Styles';
import Head from './ui/Head';
import Navigation from './ui/Navigation';
import Home from './ui/Home';
import { AuthSession } from 'expo';
import Login from './ui/Login';
// import CreateEvent from './ui/CreateEvent';


AppRegistry.registerComponent('RunHub', () => App)

export default class App extends Component {
  constructor () {
    super();
    this.state={
      loggedIn: false,
      viewHome: false,
      viewEvents: false,
      createEvent: false
    };
  };

  login = () => {
    this.setState( {
      loggedIn: true,
      viewHome: true
    })
  };

  home = () => {
    this.setState( {
      viewHome: true,
      viewEvents: false,
      createEvent: false
    })
  };

  events = () => {
    this.setState( {
      viewEvents: true,
      viewHome: false,
      createEvent: false
    })
  };

  createEvent = () => {
    this.setState( {
      createEvent: true,
      viewHome: false,
      viewEvents: false
    })
  };




  render() {
    if (!this.state.loggedIn) {
      return (
        <Login login={this.login}/>
      );
    }

    // if (!this.state.viewHome) {
    //   return (
    //     <Home home={this.home}/>
    //   );
    // };

    // if(!this.state.createEvent) {
    //   return (
    //     <CreateEvent create={this.create}/>
    //   );
    // };

    return (
      <Container>
        <Content>
          <View>
            <Home viewHome={this.state.viewHome}
                  viewEvents={this.state.viewEvents}
                  createEvent={this.state.createEvent}
                  home={this.home}
                  events={this.events}
                  createEvent={this.createEvent}
                  />
          </View>
        </Content>
      </Container>
    )
  };
};



  // _handlePressAsync = async () => {
  //   let redirectUrl = AuthSession.getRedirectUrl();
  //   let result = await AuthSession.startAsync({
  //     authUrl:
  //       `https://www.strava.com/oauth/authorize?response_type=code` +
  //       `&client_id=20992` +
  //       `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
  //   });
  //   console.log('CODE', result.params.code);
  //   console.log(result);
  //
  //   const accessToken = await this.getToken(result.params.code, 20992, '00c9b0851fd8baeba3f9df8c9c6edfa108066774')
  //   this.setState({ result });
  //   const user = await this.getUserInfo(accessToken)
  //   console.log(user);
  // };
  //
  // getToken = (accessCode, clientId, clientSecret) => {
  //
  //   const options = {
  //      method: 'POST',
  //      headers: {
  //        'Accept': 'application/json',
  //        'Content-Type': 'application/json'
  //      },
  //      body: JSON.stringify({
  //        client_id: clientId,
  //        client_secret: clientSecret,
  //        code: accessCode,
  //      })
  //    }
  //    return fetch('https://www.strava.com/oauth/token', options)
  //      .then(response => response.json())
  //      .then(response => {
  //        return response.access_token
  //      })
  //      .catch(err => {
  //        console.log(err)
  //      })
  // };
  //
  // getUserInfo = (accessToken) => {
  //   const options = {
  //      method: 'GET',
  //      body: null,
  //      headers: {
  //        'Authorization': 'Bearer ' + accessToken,
  //      },
  //
  //    };
  //   //  return fetch('https://www.strava.com/api/v3/athlete', options)
  //    return fetch('https://www.strava.com/api/v3/athlete/activities', options)
  //      .then(response => response.json())
  //      .then(response => {
  //        return response
  //      })
  //      .catch(err => {
  //        console.log(err)
  //      })
  // }

// {this.state.result ? (
// <Text>{JSON.stringify(this.state.result)}</Text>
// ) : null}

//  onPress={this._handlePressAsync} />
// <Text>Find Your Fit</Text>
