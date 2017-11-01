import React from 'react';
import { Text, View} from 'react-native';
import { Header, Left, Body, Right, Title } from 'native-base';
import styles from './Styles';


const Head = () => {
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
};

export default Head;
