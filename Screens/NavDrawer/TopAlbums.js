import * as React from 'react'
import {Text , View , StyleSheet, FlatList, Dimensions, Alert} from 'react-native'
import {Header} from  '../Header/header.js'
import {KEY} from '../api_key';
import {
    Appbar,
    TextInput,
    ActivityIndicator,
    Colors,
    Searchbar,
  } from 'react-native-paper';
  import AlbumCard from '../Components/Album_List';
 
   
 
  export default class TopAlbums extends React.Component{
    
    constructor(props) {
        super(props);
      }

      componentDidMount() {
        console.log("API: " + KEY);
        //this.getAlbums();
      }

      onChangeSearch = (text) => {
        this.setState({artist: text});
      };

    state = {
     artist:"cher",
     loading: false,
     albums:[],
     key : "#text",
    }

    getAlbums = async() => {
        this.setState({
            loading: true,
          });
          if( this.state.artist.trim() != ""){
            fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.artist}&api_key=${KEY}&format=json`)
            .then(response => {
                //console.log("response1: " + JSON.stringify(response));
                if (response.ok) {
                    return response.json();
                }
                throw new Error('error');
            })
            .then(response => {
                //console.log("response2: " + JSON.stringify(response));
                this.setState({
                    albums: response.topalbums.album,
                    loading:false
                })
                console.log(this.state.albums);
            });
          }else{
            Alert.alert("Invalid Search" , "The search field is empty!!!!");
            this.setState({ loading:false});
          }
          
    }

    // props to this class have navigation functionality from the nav drawer. So use this.props.navigation.<whatever you want to navigate to from this page> 
    
      render() {
        return(
            <View>
                <View>
                    <Header title="Top Albums" drawer = {()=>{this.props.navigation.toggleDrawer()}}/>
                </View>
                <View>
                    <Searchbar
                        placeholder= "Search for Artist"
                        onChangeText={this.onChangeSearch}
                        value = {this.state.artist}
                        onSubmitEditing = {this.getAlbums}
                        //onEndEditing = {(value) => {this.setState({artist:value})}}
                        onIconPress={this.getAlbums}
                    />
                    {this.state.loading ?
                     <ActivityIndicator
                        style={styles.spinner}
                        animating={true}
                        color={Colors.red800}
                        size={'large'}
                     />:
              <FlatList
                  data = {this.state.albums}
                  renderItem ={({item}) => {
                      //console.log(item.image[1]);
                      return(
                        <AlbumCard
                            name = {item.name}
                            aname = {item.artist.name}
                            imgsrc = {item.image[3][this.state.key]}
                            pcount ={item.playcount} 
                        />
                      );
                  } }    
              
              />
              } 
                </View>
            </View>
        )
      }
        
    } 

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: "center",
        },
        spinner: {
          flex: 1,
          flexDirection: 'column',
          marginTop: Dimensions.get('window').height/2.5,
          justifyContent:'center'
        },
      });