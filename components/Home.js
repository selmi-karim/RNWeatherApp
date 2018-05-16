import React from 'react';
import {View, Text, Button} from 'react-native';
import globalStyle from './styles/styles.js'

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    search () {
        this.props.navigation.navigate('Search');
    }
    render() {
        return (
            <View style={globalStyle.container}>
                <Text style={globalStyle.title}> i don't want to waste your time, this is a fake screen </Text>
                <Button style={globalStyle.button} onPress={ () => this.search()} title="search"/>
            </View>
        )
    }
}