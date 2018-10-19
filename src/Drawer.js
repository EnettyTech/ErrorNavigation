import { createDrawerNavigator, DrawerActions } from 'react-navigation'
import Draw2 from './pages/draw2';
import Draw3 from './pages/draw3';
import TabBottom from './TabBottom';
import { TouchableOpacity, Text } from 'react-native';
import { Icon } from 'native-base'

const DrawerScreen = createDrawerNavigator(
    {
        DRAW2: {
            screen: Draw2
        },
        DRAW3: {
            screen: Draw3
        },
        TABBOTTOM: {
            screen: TabBottom
        }
    }, {
        initialRouteName: 'TABBOTTOM',
        navigationOptions: ({ navigation }) => ({
            title: 'demo navigation',
            headerLeft: () => {
                return (
                    <TouchableOpacity
                        onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}
                    >
                        <Icon name='book' type='FontAwesome' />
                    </TouchableOpacity>
                )
            }
        })
        // order: ['DRAW2', 'DRAW3']
    }
)
export default DrawerScreen;