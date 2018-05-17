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
                <Text style={globalStyle.dayTitle}>{this.props.index} </Text>
                <Text>Temperature Min: {this.props.day.tempMin} </Text>
                <Text>Temperature Max: {this.props.day.tempMax} </Text>
                <Text>Force de Vente: {this.props.day.forceVente} </Text>
                <Text>Direction de Vente: {this.props.day.forceVente} </Text>
            </View>
        )
    }

}