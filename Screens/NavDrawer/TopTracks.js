import * as React from 'react'
import {Text , View , StyleSheet , Dimensions , FlatList} from 'react-native'
import {Header} from  '../Header/header.js'
import {KEY} from '../api_key';
import {
    Appbar,
    TextInput,
    ActivityIndicator,
    Colors,
    Searchbar,
  } from 'react-native-paper';
import TrackCard from '../Components/Track_List';

export default class TopTracks extends React.Component{

    constructor(props) {
        super(props);
      }

    componentDidMount(){
      this.getTopTracks();
    }
    
    state = {
        query:"",
        loading: false,
        tracks:[],
        key : "#text"
    }

    onChangeSearch = (text) => {
        this.setState({query: text});
      };

    getTopTracks = async() => {
        this.setState({
            loading: true,
          });
          
          fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${KEY}&format=json`)
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
                  tracks: response.tracks.track,
                  loading: false,
              })
          });
    }

    getTrack = async() => {
        this.setState({
            loading: true,
            tracks: [],
          });
          if(this.state.query.trim() != ""){
            fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.state.query}&api_key=${KEY}&format=json`)
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
                    tracks: response.results.trackmatches.track,
                    loading: false,
                })
            });
          }else{
              this.getTopTracks();
          }
          
    }

    // props to this class have navigation functionality from the nav drawer. So use this.props.navigation.<whatever you want to navigate to from this page> 
    
    render(){
        return(
            <View>
                <View>
                    <Header title="Top Tracks" drawer = {()=>{this.props.navigation.toggleDrawer()}}/>
                </View>
                <View>
                   <Searchbar
                    placeholder="Search for your track"
                    onChangeText={this.onChangeSearch}
                    value = {this.state.query}
                    onSubmitEditing = {this.getTrack}
                    onIconPress={this.getTrack}
                   /> 
                    {this.state.loading ?
                     <ActivityIndicator
                        style={styles.spinner}
                        animating={true}
                        color={Colors.red800}
                        size={'large'}
                     />:
              <FlatList
                  data = {this.state.tracks}
                  renderItem ={({item}) => {
                      //console.log(item.image[1]);
                      return(
                        <TrackCard
                            name = {item.name}
                            aname = {item.artist.name}
                            Aname = {item.artist}
                            imgsrc = {item.image[3][this.state.key]}
                            pcount ={item.playcount} 
                            listn = {item.listeners}
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