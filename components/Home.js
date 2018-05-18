import React from 'react';
import {View, Text, Button} from 'react-native';
import globalStyle from './styles/styles.js'

export default class Home extends React.Component {

    search () {
        this.props.navigation.navigate('Search');
    }
    render() {
        return (
            <View style={globalStyle.container}>
                <Text style={globalStyle.title}> 
                Weather like you’ve never seen before ;)
                </Text>
                <Button style={globalStyle.button} onPress={ () => this.search()} title="search"/>
            </View>
        )
    }
}