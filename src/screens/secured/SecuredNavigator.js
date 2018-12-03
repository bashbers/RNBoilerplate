import {createDrawerNavigator, createStackNavigator, NavigationActions} from 'react-navigation';
import {Dimensions, Platform} from 'react-native';
import DashboardScreen from '../secured/DashboardScreen';
import SideMenu from 'src/components/SideMenu'
import AIcon from "react-native-vector-icons/AntDesign";
import React from "react";
import {store} from 'src/App'


const drawerOptions = {
    drawerWidth: () => Dimensions.get('window').width - (Platform.OS === 'android' ? 56 : 64),
    contentOptions: {
        activeTintColor: "#EB274C",
        activeBackgroundColor: "rgba(235,39,76, 0.15)",
        iconContainerStyle: {
          opacity: 1
        },
        inactiveTintColor: "#333",
        labelStyle: {fontSize: 16, lineHeight: 16, paddingLeft: 15, height: 16, fontWeight: 'normal', flex: 1},
        activeLabelStyle: {fontWeight: 'bold'}
    },
    initialRouteName: 'dashboardStack',
    contentComponent: SideMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#EB274C',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },

    }
};

const SecuredNavigator = createDrawerNavigator({
    dashboardStack: {
        screen: createStackNavigator({
            dashboardHome: {screen: DashboardScreen}
        }),
        navigationOptions: {
            drawerLabel: 'Dashboard',
            drawerIcon: (
                <AIcon name="dashboard" size={20}/>
            ),
        }
    },
    logout: () => {
        store.dispatch(NavigationActions.navigate({routeName: 'auth'}));
        return null;
    }
}, drawerOptions);

export default SecuredNavigator;


// LogOut: {
//     screen: {return console.log('test')},
//     navigationOptions: {
//         drawerLabel: 'Log Out',
//         drawerIcon: (
//             <FIcon name="sign-out" size={20}/>
//         ),
//     }
// }
