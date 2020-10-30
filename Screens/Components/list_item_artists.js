import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default class ArtistItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() =>
            this.props.onPress(
              console.log("Track pressed: " + this.props.item1.image[0].size)
            ) 
          }>

        <Card elevation={0}>
          <Card.Cover source={{ uri: this.props.item1.image[1]["#text"]}} />
          <Card.Content>
            <Title>{this.props.item1.name}</Title>
            <Paragraph>{this.props.item1.listeners} listeners</Paragraph>
          </Card.Content>
        </Card>
      
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    borderWidth:0,
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    borderColor:'#808080',
    marginTop:10,
    elevation: 10
},
containerStyle: {
    padding: 10,
    backgroundColor: 'white',
    borderWidth:0,
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    borderColor:'#808080',
    marginTop:50,
    elevation: 5
}
});