import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import globalStyle from './styles/styles.js'

export default class Row extends React.Component {
    static propTypes = {                
        day: PropTypes.object,
        index: PropTypes.string
    }
    render () {
        return (
            <View style={globalStyle.container}>
                <Text style={globalStyle.dayTitle}> {this.props.index} </Text>
                <Text>TempMin: {this.props.day.tempMin} </Text>
                <Text>TempMax: {this.props.day.tempMax} </Text>
                <Text>ForceVente: {this.props.day.forceVente} </Text>
                <Text>directionVente: {this.props.day.forceVente} </Text>
            </View>
        )
    }

}