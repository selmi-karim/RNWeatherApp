import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import globalStyle from './styles/styles.js'

export default class Row extends React.Component {
    static propTypes = {                
        day: PropTypes.object,
        index: PropTypes.number
    }
    render () {
        console.log(this.props.index);
                if (this.props.index === 1) {
                    return (
                        <View style={globalStyle.container}>
                            <Text style={globalStyle.dayTitle}> Today </Text>
                            <Text>TempMin: {this.props.day.tempMin} </Text>
                            <Text>TempMax: {this.props.day.tempMax} </Text>
                            <Text>ForceVente: {this.props.day.forceVente} </Text>
                            <Text>directionVente: {this.props.day.forceVente} </Text>
                        </View>
                    )
                }else if (this.props.index === 0) {
                    return (
                        <View style={globalStyle.container}>
                            <Text style={globalStyle.dayTitle}> Tomorrow </Text>
                            <Text>TempMin: {this.props.day.tempMin} </Text>
                            <Text>TempMax: {this.props.day.tempMax} </Text>
                            <Text>ForceVente: {this.props.day.forceVente} </Text>
                            <Text>directionVente: {this.props.day.forceVente} </Text>
                        </View>
                    )
                }
    }

}