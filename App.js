import Expo from 'expo';
import React, { Component } from 'react';
import { Button, Image, Text, View, AppRegistry } from 'react-native';
import { Container, Content } from 'native-base';
import styles from './ui/styles';
import Head from './ui/Head';
import { AuthSession } from 'expo';

AppRegistry.registerComponent('RunHub', () => App)

//Auth Session
export default class App extends React.Component {
  state = {
    result: null,
  };

  render() {
    return (
      <Container>
      <Head />
        <Content>
          <View style={styles.container}>
            <Image
              style={{width: 320, height: 220}}
              source={require('./images/trail_run_splash.jpg')} />
            <Button title="Login to RunHub" onPress={this._handlePressAsync} />
            <Text>Find Your Fit</Text>
              {this.state.result ? (
            <Text>{JSON.stringify(this.state.result)}</Text>
              ) : null}
          </View>
        </Content>
      </Container>
    );
  };

  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    let result = await AuthSession.startAsync({
      authUrl:
        `https://www.strava.com/oauth/authorize?response_type=code` +
        `&client_id=20992` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });
    console.log('CODE', result.params.code);
    console.log(result);

    const accessToken = await this.getToken(result.params.code, 20992, '00c9b0851fd8baeba3f9df8c9c6edfa108066774')
    this.setState({ result });
    const user = await this.getUserInfo(accessToken)
    console.log(user);
  };

  getToken = (accessCode, clientId, clientSecret) => {

    const options = {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         client_id: clientId,
         client_secret: clientSecret,
         code: accessCode,
       })
     }
     return fetch('https://www.strava.com/oauth/token', options)
       .then(response => response.json())
       .then(response => {
         return response.access_token
       })
       .catch(err => {
         console.log(err)
       })
  };

  getUserInfo = (accessToken) => {
    const options = {
       method: 'GET',
       body: null,
       headers: {
         'Authorization': 'Bearer ' + accessToken,
       },

     };
    //  return fetch('https://www.strava.com/api/v3/athlete', options)
     return fetch('https://www.strava.com/api/v3/athlete/activities', options)
       .then(response => response.json())
       .then(response => {
         return response
       })
       .catch(err => {
         console.log(err)
       })
  }

}
