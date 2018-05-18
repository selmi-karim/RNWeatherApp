import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import List from './List.js'
import globalStyle from './styles/styles.js'

class Search extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            city: ''
        }
    }
    submit () {
        this.props.navigation.navigate('List', {city: this.state.city});
    }
    setCity (city) {
        this.setState({city})
    }
    render() {
        return (
            <View style={globalStyle.container}>
                <Text style={globalStyle.dayTitle} > 
                Enter a City name (in Tunisia) and saw current weather data 
                </Text>
                <TextInput 
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setCity(text)}
                style={{height:40, borderColor: 'gray', borderWidth: 1}}
                />
                <Button style={globalStyle.button} onPress={ () => this.submit()} title="Find" />
            </View>
        )
    }
}

export default createStackNavigator({
    Search: {
        screen: Search
    },
    List: {
        screen: List
    }

});