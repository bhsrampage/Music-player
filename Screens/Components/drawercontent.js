import * as React from 'react'
import  {View ,Text , StyleSheet , Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {DrawerContentScrollView , DrawerItem} from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function DrawerContent(props){
    let width =  Dimensions.get("screen").width
    let height =  Dimensions.get('window').height

    return(
        <View style={{flex:1}}>
            <View style={{backgroundColor:"#6f5060" , height:height*0.3 , width:undefined , alignItems:'center' , justifyContent:'center'}}>
                <Text style={{color:"#fff" , fontSize:40 }}>MUSIX</Text>
            </View>
            <DrawerContentScrollView>
                <ScreenButton title="Top Tracks" icon="library-music" go={()=>{props.navigation.navigate("Top Tracks")}}/>
                <ScreenButton title="Top Albums" icon="album" go={()=>{props.navigation.navigate("Top Albums")}}/>
                <ScreenButton title="Top Artists"icon="mic" go={()=>{props.navigation.navigate("Top Artists")}}/>
            </DrawerContentScrollView>
        </View>
    )
}

function ScreenButton(props){

        return(<View>
                <TouchableOpacity onPress={props.go}>
                    <View style = {{flexDirection:'row' , paddingTop:10 , paddingBottom:10}}>
                        <Icon name={props.icon} size={30} color="#94778b" style={{paddingLeft:10 , paddingRight:10}}/>
                        <Text style={{fontSize:17}}>{props.title}</Text>
                    </View> 
                </TouchableOpacity>
                <View style={{backgroundColor:"#aeaeae" , width:undefined , height:1}}/>
            </View>
        )

}