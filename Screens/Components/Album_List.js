import React from 'react';
import { View , StyleSheet , Text , TouchableOpacity} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph , Subheading } from 'react-native-paper';

const AlbumCard = (props) => {

   
    return (
        <View style={styles.mainContainer}>
        <TouchableOpacity>

        <Card elevation={0}>
            <View style={{flexDirection:'row'}}>
          <Card.Cover source={{ uri: `${props.imgsrc}`}} style={styles.imgstyle} />
          <View style={{flexDirection:'column' , marginLeft:10}}>
          <Title>{props.name}</Title>
          <Subheading>{props.aname}</Subheading>
            <Paragraph>Playcount : {props.pcount}</Paragraph>
            </View>
            </View>
        </Card>
      
        </TouchableOpacity>
      </View>
    );
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
  },
  imgstyle:{
      height:200,
      width:150,
      
  }
  })
  
  ;

export default AlbumCard;