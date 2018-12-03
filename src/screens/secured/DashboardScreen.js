import React from 'react';
import Screen from 'src/components/Screen';
import {connect} from "react-redux";
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import AreaChartExample from 'src/components/charts/AreaChartExample';

class DashboardScreen extends Screen {
    render() {
        const {dispatch} = this.props;
        return(
            <View>
                <AreaChartExample/>
                <AreaChartExample/>
                <Button
                    title={'Back to Auth'}
                    onPress={() => dispatch(NavigationActions.navigate({routeName: 'auth'}))}
                />
            </View>)
    }
}

export default connect(null,null)(DashboardScreen);
