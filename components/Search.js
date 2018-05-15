import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class Search extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            city: 'Sousse'
        }
    }
    submit () {
        console.log('find weather in blabla city')
    }
    setCity (city) {
        this.setState({city})
    }
    render() {
        return (
            <View>
                <TextInput 
                underLineColorAndroid='transparent'
                onChangeText={(text) => this.setCity(text)}
                style={{height:40, borderColor: 'gray', borderWidth: 1,marginBottom:50}}
                value={this.state.city}            
                />
                <Button onPress={ () => this.submit()} title="Find" />
            </View>
        )
    }
}