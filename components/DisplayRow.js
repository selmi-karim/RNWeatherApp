import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';


export default class Row extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            index: 1
        }
    }
    static propTypes = {                
        day: PropTypes.object,
        index: PropTypes.number
    }
    render () {
        console.log(this.props.state.index);
                if (this.props.state.index === 1) {
                    this.props.state.index = 2;
                    return (
                        <View>
                            <Text> Today </Text>
                            <Text>TempMin: {this.props.day.tempMin} </Text>
                            <Text>TempMax: {this.props.day.tempMax} </Text>
                            <Text>ForceVente: {this.props.day.forceVente} </Text>
                            <Text>directionVente: {this.props.day.foreVente} </Text>
                        </View >
                    )
                }else if (this.props.state.index === 2) {
                    this.props.state.index = 1;
                    return (
                        <View>
                            <Text> Tomorrow </Text>
                            <Text>TempMin: {this.props.day.tempMin} </Text>
                            <Text>TempMax: {this.props.day.tempMax} </Text>
                            <Text>ForceVente: {this.props.day.forceVente} </Text>
                            <Text>directionVente: {this.props.day.forceVente} </Text>
                        </View>
                    )
                }
    }

}