import * as React from 'react'
import {Text , View} from 'react-native'
import {Header} from  '../Header/header.js'

export default class TopTracks extends React.Component{

    // props to this class have navigation functionality from the nav drawer. So use this.props.navigation.<whatever you want to navigate to from this page> 
    
    render(){
        return(
            <View>
                <View>
                    <Header title="Top Tracks" drawer = {()=>{this.props.navigation.toggleDrawer()}}/>
                </View>
                <View>
                    <Text>Top Tracks Page</Text>
                </View>
            </View>
        )
    }


} 