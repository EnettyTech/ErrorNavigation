import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

export default class Loginpage extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> login page </Text>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate('DrawerNa') }}
                    style={{ height: 50, width: 300, justifyContent: 'center', alignItems: 'center', borderWidth: 1 }}
                >
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}