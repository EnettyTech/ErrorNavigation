// import React, { Component } from 'react';
// import { TouchableOpacity, Text } from 'react-native';

// import Loginpage from './pages/login';

// import TabBottom from './TabBottom'
// import DrawerScreen from './Drawer';
// import { Icon } from 'native-base'
// import { createStackNavigator, DrawerActions } from 'react-navigation';

// const stackScreen = createStackNavigator(
//     {
//         LOGIN: {
//             screen: Loginpage,
//             navigationOptions: {
//                 header: () => null,
//             }
//         },
//         DRAWER: { screen: DrawerScreen }
//     }, {
//         initialRouteName: 'LOGIN',
//         navigationOptions: ({ navigation }) => ({
//             title: 'demo navigation',
//             headerLeft: () => {
//                 return (
//                     <TouchableOpacity
//                         onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}
//                         style={{ marginLeft: 10 }}
//                     >
//                         <Icon type="FontAwesome" name="bars" />
//                     </TouchableOpacity>
//                 )
//             }
//         })
//     }
// )


// export default stackScreen;


import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator, DrawerActions } from 'react-navigation';
import Draw2 from './pages/draw2';
import Draw3 from './pages/draw3';
import Homepage from './pages/home';
import Requestpage from './pages/request';
import Sendpage from './pages/send';
import Loginpage from './pages/login';
import draw3 from './pages/draw3';
import { Icon } from 'native-base';
import { TouchableOpacity, Text } from 'react-native';


const Tabs = createMaterialTopTabNavigator({
    Homepage: Homepage,
    Requestpage: Requestpage,
    Sendpage: Sendpage
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#fff',
            },
            indicatorStyle: {
                backgroundColor: '#000',
            },
        }
    });

const Drawer = createDrawerNavigator({
    Home: { screen: Tabs },
    Draw2: { screen: Draw2 },
    Draw3: { screen: draw3 }
}, {
        initialRouteName: 'Home',

    })

const stackScreen = createStackNavigator({
    DrawerNa: {
        screen: Drawer
    },
    Login: {
        screen: Loginpage,
        navigationOptions: {
            header: () => null
        }
    }
}, {
        initialRouteName: 'Login',
        navigationOptions: ({ navigation }) => ({
            title: 'demo navigation',
            headerLeft: () => {
                return (
                    <TouchableOpacity
                        onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}
                        style={{ marginLeft: 10 }}
                    >
                        <Icon type="FontAwesome" name="bars" />
                    </TouchableOpacity>
                )
            }
        })
    })
export default stackScreen;


