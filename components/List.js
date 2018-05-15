import React from 'react';
import {View, Text, Button} from 'react-native';
import globalStyle from './styles/styles.js'

export default class List extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo `+ ${navigation.state.params.city}
        }
       
    }

    constructor (props) {
        super(props)
        console.log('state', this.props.navigation.state)
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        }
    }
    render() {
        return (
            <View style={globalStyle.container}>
                <Text style={globalStyle.title}> youpiii </Text>
            </View>
        )
    }
}