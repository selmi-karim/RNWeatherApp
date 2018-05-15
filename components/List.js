import React from 'react';
import {View, Text, Button} from 'react-native';
import globalStyle from './styles/styles.js'

export default class List extends React.Component {

    search () {
        this.props.navigation.navigate('Search');
    }
    render() {
        return (
            <View style={globalStyle.container}>
                <Text style={globalStyle.title}> youpiii </Text>
            </View>
        )
    }
}