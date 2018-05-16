import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';


export default class Row extends React.Component {
    static propTypes = {
        day: PropTypes.object,
        index: PropTypes.number
    }
    render () {
        return (
            <View>
                <Text> {this.props.day.today.tempMin} </Text>
            </View>
        )
    }

}