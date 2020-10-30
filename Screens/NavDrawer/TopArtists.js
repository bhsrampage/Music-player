import * as React from 'react'
import {Text , View, StyleSheet, FlatList} from 'react-native'
import {Header} from  '../Header/header.js'
import {
    Appbar,
    TextInput,
    ActivityIndicator,
    Colors,
    Searchbar,
  } from 'react-native-paper';
import ArtistItem from '../Components/list_item_artists';
import {KEY} from '../api_key';

export default class TopArtists extends React.Component{
    // props to this class have navigation functionality from the nav drawer. So use this.props.navigation.<whatever you want to navigate to from this page> 

    constructor(props) {
        super(props);
      }
    
      componentDidMount() {
        console.log("API: " + KEY);
        this.getArtists();
      }
    
      state = {
        query: '',
        artists: [],
        loading: false,
      };
    
      onChangeSearch = (text) => {
        this.setState({query: text});
      };
    
      getArtists = async () => {
        this.setState({
          loading: true,
        });
        
        fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${KEY}&format=json`)
        .then(response => {
            console.log("response1: " + JSON.stringify(response));
            if (response.ok) {
                return response.json();
            }
            throw new Error('error');
        })
        .then(response => {
            console.log("response2: " + JSON.stringify(response));
            this.setState({
                artists: response.artists.artist,
                loading: false,
            })
        });
      };

    search = () => {
        console.log("Search");
    }

    render() {
        return (
          <View style={styles.container}>
            <View>
                <Header title="Top Artists" drawer = {()=>{this.props.navigation.toggleDrawer()}}/>
            </View>
            <Searchbar
              placeholder="Search"
              onChangeText={this.onChangeSearch}
              value={this.state.query}
              onBlur={this.search}
            />
            {this.state.artists.length === 0 ? (
              <ActivityIndicator
                style={styles.spinner}
                animating={true}
                color={Colors.red800}
                size={'large'}
              />
            ) : this.state.loading === false ? (
              <FlatList
                data={this.state.artists}
                renderItem={({item}) => {
                  console.log(item.name);
                  return (
                    <ArtistItem
                      key={item.mbid}
                      item1={item}
                      onPress={(x, y, z) =>
                        console.log("item pressed")
                      }
                    />
                  );
                }}
                numColumns={2}
                keyExtractor={(item) => item.mbid}
              />
            ) : (
              <View style={styles.spinner}>
                <ActivityIndicator
                  animating={true}
                  color={Colors.red800}
                  size={'large'}
                />
              </View>
            )}
          </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    spinner: {
      flex: 1,
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
    },
  });