import React from 'react';
import { Button, StyleSheet, Image, Text, View } from 'react-native';

import { AuthSession } from 'expo';

export default class App extends React.Component {
  state = {
    result: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Runners</Text>
        <Image
          style={{width: 300, height: 200}}
          source={{uri: 'https://acewebcontent.azureedge.net/certifiednews/August_2011/Runner_main.jpg'}} />
        <Button title="Welcome to RunHub" onPress={this._handlePressAsync} />
        {this.state.result ? (
          <Text>{JSON.stringify(this.state.result)}</Text>
        ) : null}
        </View>
    );
  }

  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl();
    let result = await AuthSession.startAsync({
      authUrl:
        `https://www.strava.com/oauth/authorize?response_type=code` +
        `&client_id=20992` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
    });
    console.log('CODE', result.params.code);

    getToken(result.params.code, 20992, '00c9b0851fd8baeba3f9df8c9c6edfa108066774')
    this.setState({ result });

  };

  getToken = (accessCode, clientId, clientSecret) => {

    let form = JSON.stringify({client_id: clientId, client_secret: clientSecret, code: accessCode})
    const options = {
       method: 'POST',
       body: form,
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         client_id: clientId,
         client_secret: clientSecret,
         code: accessCode,
        //  character_id: characterId,
        //  weapon_id: itemId,
       })
     }
     fetch(url, options)
       .then(response => response.json())
       .then(response => {
         console.log(response);
       })
       .catch(err => {
       console.log(err)
     })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddcdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
