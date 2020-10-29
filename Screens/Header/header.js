import * as React from 'react';
import { Appbar , View} from 'react-native-paper';

export let Header = props => {
    return(
        <Appbar.Header style = {{backgroundColor : "#201a23"}}>
            <Appbar.Action icon="hamburger" onPress={props.drawer} />
            <Appbar.Content title={props.title}/>
        </Appbar.Header>
    )
}
//#51344d