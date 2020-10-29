import * as React from 'react'
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TopTracks from '../NavDrawer/TopTracks.js'
import TopAlbums from '../NavDrawer/TopAlbums.js'
import TopArtists from '../NavDrawer/TopArtists.js'

import {DrawerContent} from '../Components/drawercontent.js'

const Drawer = createDrawerNavigator();

export default function Parent(){

    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Top Tracks" drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen name="Top Tracks" component ={TopTracks}/>
                <Drawer.Screen name="Top Artists" component ={TopArtists}/>
                <Drawer.Screen name="Top Albums" component ={TopAlbums}/>    
            </Drawer.Navigator> 
        </NavigationContainer>
    )

}
