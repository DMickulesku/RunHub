import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { Header, Left, Body, Right, Title } from 'native-base';
import styles from './styles';

// const Head = (props) => {
//
// }

export default class Head extends Component {

  render() {
    return (
      <View style={styles.headView}>
        <Header>
          <Left />
          <Body>
            <Title> RunHub </Title>
          </Body>
          <Right />
        </Header>
      </View>
    )
  }
};
