import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import styles from './Styles';
import axios from 'axios';

class EventList extends Component {
  // componentWillMount() {
  //   axios.get('https://boiling-ravine-75542.herokuapp.com/')
  //     .then(respose => console.log(response));
  // }

  render() {
    return (
      <Container style={{padding: 10}}>
        <Content styles={styles.cardContent}>
            <Text style={styles.homeText}> Upcoming Events </Text>
            <Card>
                <CardItem>
                  <Left>
                    <Icon name="ios-walk" />
                    <Body>
                      <Text>Centennial Cone</Text>
                      <Text note>11/5/2017 7:15AM</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={require('../images/centennial_cone.png')}
                  style={{height: 200, flex: 1}}/>
                </CardItem>
                <Body>
                  <Text style={{fontSize: 8}}> Hosted by Randy G. </Text>
                </Body>
              </Card>

              <Card>
                  <CardItem>
                    <Left>
                      <Icon name="ios-walk" />
                      <Body>
                        <Text>Park Hill/ Stapleton Loop</Text>
                        <Text note>11/14/2017 6:15PM</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={require('../images/Park_Hill_Stapleton.png')}
                    style={{height: 200, flex: 1}}/>
                  </CardItem>
                  <Body>
                    <Text style={{fontSize: 8}}> Hosted by Dan M. </Text>
                  </Body>
                </Card>

                <Card>
                    <CardItem>
                      <Left>
                        <Icon name="ios-walk" />
                        <Body>
                          <Text>Bergen Peak</Text>
                          <Text note>11/18/2017 9:15AM</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image source={require('../images/bergen_peak.png')}
                      style={{height: 200, flex: 1}}/>
                    </CardItem>
                      <Body>
                        <Text style={{fontSize: 8}}> Hosted by Brian B. </Text>
                      </Body>
                  </Card>

                  <Card>
                      <CardItem>
                        <Left>
                          <Icon name="ios-walk" />
                          <Body>
                            <Text>Centennial Cone</Text>
                            <Text note>11/14/2017 7:15AM</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem cardBody>
                        <Image source={require('../images/centennial_cone.png')}
                        style={{height: 200, flex: 1}}/>
                      </CardItem>
                        <Body>
                      <Text style={{fontSize: 8}}> Hosted by Denver Trail Runners Run Club </Text>
                        </Body>
                    </Card>
        </Content>
      </Container>
    );
  }
};

export default EventList;
