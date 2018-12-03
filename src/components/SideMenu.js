import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import {DrawerItems} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerCurvedBorder from 'src/components/DrawerCurvedBorder';
import OnLayout from "react-native-on-layout";

class SideMenu extends Component {
    render() {
        const {menuWrapperStyle, closeIconStyle, profileIconStyle} = styles;
        return (
            <ScrollView style={{flex: 1, marginBottom: 0}}>
                <View style={menuWrapperStyle}>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.toggleDrawer()}>
                        <Icon style={closeIconStyle} name="close" size={20} />
                    </TouchableWithoutFeedback>
                    <View style={{flex: 1, flexDirection: 'row-reverse', alignSelf: 'flex-end'}}>
                        <Icon style={profileIconStyle} name="user-circle-o" size={75} />
                    </View>
                </View>
                <OnLayout>
                    {({width}) => (
                        <DrawerCurvedBorder
                            width={width}
                            fill={'#EF2447'}
                            // style={{backgroundColor: 'rgba(235,39,76, 0.15)', marginTop: 0}}
                            />

                    )}
                </OnLayout>
                <DrawerItems {...this.props} />
            </ScrollView>);
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object.isRequired
};

const mapStateToProps = () => {
    return {};
};

const styles = StyleSheet.create({
    menuWrapperStyle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        height: 100,
        backgroundColor: '#EB274C',
        paddingBottom: 0,
    },
    closeIconStyle: {
        paddingLeft: 20,
        paddingTop: 20,
        color: '#FFF'
    },
    profileIconStyle: {
        paddingRight: 40,
        color: '#FFF'
    }
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
