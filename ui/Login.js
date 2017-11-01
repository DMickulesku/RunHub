import Expo from 'expo';
import React, { Component } from 'react';
import { Image, Text, View, AppRegistry } from 'react-native';
import { Container, Content, FooterTab, Footer, Left, Right, Body, Icon, Button, Form, Item, Input, Label } from 'native-base';
import styles from './Styles';
import Head from './Head';
import { AuthSession } from 'expo';


const Login = (props) => {
  return (
    <Container>
    <Head />
      <Content>
        <View style={styles.container}>
          <Image
            style={{width: 400, height: 450}}
            source={require('../images/trail_legs.jpg')} />
        </View>
        <View>
          <Button onPress={props.login} block light>
          <Text>Login</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

export default Login
