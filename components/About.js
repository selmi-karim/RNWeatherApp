import React from 'react';
import {View, Text} from 'react-native';
import globalStyle from './styles/styles.js'

export default class About extends React.Component {
    

    render() {
        return (
            <View style={globalStyle.container}>
                <Text style={globalStyle.title}> welcome to the jungle xD check my personal website for
                    more informations: karimation.com
                </Text>
            </View>
        )
    }
}