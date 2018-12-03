import {createSwitchNavigator} from 'react-navigation'
import SecuredNavigator from './secured/SecuredNavigator';
import AuthNavigator from './auth/AuthNavigator';

const MainNavigator = createSwitchNavigator(
    {
        auth: AuthNavigator,
        secured: SecuredNavigator
    },
    {
        initialRouteName: "auth"
    }
);

export default MainNavigator;
