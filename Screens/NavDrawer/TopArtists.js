import * as React from 'react'
import {Text , View} from 'react-native'
import {Header} from  '../Header/header.js'

export default class TopArtists extends React.Component{

    // props to this class have navigation functionality from the nav drawer. So use this.props.navigation.<whatever you want to navigate to from this page> 
    
    render(){
        return(
            <View>
                <View>
                    <Header title="Top Artists" drawer = {()=>{this.props.navigation.toggleDrawer()}}/>
                </View>
                <View>
                    <Text>Top Artists Page</Text>
                </View>
            </View>
        )
    }
} 