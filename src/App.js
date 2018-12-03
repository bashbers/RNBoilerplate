import React from 'react';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer
} from 'react-navigation-redux-helpers';
import {Provider, connect} from 'react-redux';
import {View} from 'react-native'
import thunk from "redux-thunk";
import MainNavigator from './screens/MainNavigator';

/** Reducers **/
import authReducer from 'src/state/reducers/auth'

const navReducer = createNavigationReducer(MainNavigator);
const appReducer = combineReducers({
    auth: authReducer,
    nav: navReducer
});

/**  Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator **/
const middleware = createReactNavigationReduxMiddleware("root", state => state.nav);
const App = reduxifyNavigator(MainNavigator, "root");

const mapStateToProps = (state) => ({
    state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

/** In order to get RN Debugger working. **/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(appReducer, /* preloadedState, */
    composeEnhancers(
        applyMiddleware(thunk, middleware),
    )
);

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                    <View style={{flex: 1}}>
                        <AppWithNavigationState/>
                    </View>
            </Provider>)
    }
}

