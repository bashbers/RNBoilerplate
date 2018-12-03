import { createStackNavigator}  from 'react-navigation';
import LoginScreen from 'src/screens/auth/LoginScreen';

// This navigator nests all screens for which a user has not been authenticated yet.
const AuthNavigator = createStackNavigator({
        login: LoginScreen,
    }, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
        initialRouteName: "login"
    }
);

export default AuthNavigator;
