import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from "react-redux";
import {Button} from 'react-native-elements';
import {NavigationActions} from 'react-navigation'
import PropTypes from 'prop-types';

class LoginScreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    LoginScreen
                </Text>
                <Button
                    title={'Continue'}
                    onPress={() => this.props.dispatch(NavigationActions.navigate({routeName: 'secured'}))}
                />
            </View>
        )
    }
}

LoginScreen.propTypes = {
    dispatch: PropTypes.func,
};

export default connect(null,null)(LoginScreen)
