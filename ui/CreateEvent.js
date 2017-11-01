import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

const CreateEvent = (props) => {

    return (
      <Container>
        <Header />
        <Text style={styles.homeText}> Create Event </Text>
        <Content>
        <View>
          <Form style={{padding: 10, borderWidth: 1}}>
            <Item floatingLabel>
              <Label>Date/Time</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Run Type</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Event Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Location</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Route</Label>
              <Input />
            </Item>
          </Form>
        </View>
          <Button block light>
          <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
}

export default CreateEvent
