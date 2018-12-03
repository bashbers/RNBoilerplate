import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Screen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: (<TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
                <Icon style={{paddingLeft:20}} name="bars" size={20} color={'#EB274C'}/>
            </TouchableWithoutFeedback>)
        };
    };
}
