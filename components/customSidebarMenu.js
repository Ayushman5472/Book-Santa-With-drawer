import * as React from 'react'
import {Text, View} from 'react-native'
import firebase from 'firebase'
import {DrawerItems} from 'react-navigation-drawer'

export default class CustomSidebarMenu extends React.Component{
render(){
    return(
        <View style = {{flex:1}}>
            <View style = {{flex:0.8}}>
            <DrawerItems {...this.props}>

            </DrawerItems>
            </View>
     </View>  
    )

}
    
}