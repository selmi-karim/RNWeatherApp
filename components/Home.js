import React from 'react';
import {View, Text, Button} from 'react-native';


export default class Home extends React.Component {

    search () {
        this.props.navigation.navigate('Search');
    }
    render() {
        return (
            <View>
                <Text> i don't want to waste your time, this is a fake screen </Text>
                <Button onPress={ () => this.search()} title="search"/>
            </View>
        )
    }
}