import { createMaterialTopTabNavigator } from 'react-navigation'
import Homepage from './pages/home';
import Requestpage from './pages/request';
import Sendpage from './pages/send';

const TabBottom = createMaterialTopTabNavigator(
    {
        HOME: {
            screen: Homepage,
            navigationOptions: {
                tabBarLabel: 'Tab 1'
            }
        },
        SEND: {
            screen: Sendpage,
            navigationOptions: {
                tabBarLabel: 'Tab 2'
            }
        },
        REQUEST: {
            screen: Requestpage,
            navigationOptions: {
                tabBarLabel: 'Tab 3'
            }
        }
    }, {
        animationEnabled: true,
        order: ['SEND', 'HOME', 'REQUEST'],
        initialRouteName: 'HOME',
        tabBarPosition: 'bottom'
    }
)
export default TabBottom;