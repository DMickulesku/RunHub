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
            style={{width: 400, height: 435}}
            source={require('../images/trail_legs.jpg')} />
        </View>
        <View style={styles.contianer}>
          <Button onPress={props.login} style={{marginTop: 10}} block primary>
          <Text>Login</Text>
          </Button>
          <Text style={styles.signUpText}>not a member? Sign up!</Text>
        </View>
      </Content>
    </Container>
  );
}

export default Login
