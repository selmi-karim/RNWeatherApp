import React from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import globalStyle from './styles/styles.js'

export default class List extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo dans / ${navigation.state.params.city}`
        }
       
    }

    constructor (props) {
        super(props)
        console.log('state', this.props.navigation.state)
        this.state = {
            city:  'sousse',//this.props.navigation.state.params.city,
            report: null
        }
        this.fetchWeather()
    }

    fetchWeather () {
        axios.get(`https://meteotnapi.herokuapp.com/api?city=${this.state.city}`)
        .ther((response) => {
            
        })
    }
    render() {
        if(this.state.report === null ){
            return (
                <ActivityIndicator color={globalStyle.color} size='large'/>
            )
        }else {
            return (
                <View style={globalStyle.container}>
                    <Text style={globalStyle.title}> youpiii </Text>
                </View>
            )
        }
    }
}