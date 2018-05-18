import React from 'react';
import {View, Text, Button, ActivityIndicator, ListView} from 'react-native';
import axios from 'axios';
import DisplayRow from './DisplayRow.js'
import globalStyle from './styles/styles.js'


export default class List extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            header: { visible:false },
        }
       
    }

    constructor (props) {
        super(props)
        this.state = {
            city:  this.props.navigation.state.params.city,
            report: null
        }
        this.fetchWeather()
    }

    fetchWeather () {
        axios.get(`https://meteotnapi.herokuapp.com/api?city=${this.state.city}`)
        .then((response) => {
            //console.log(response.data.city);
            //console.log(typeof response.data.error)
            this.setState({report: response.data})            
        })
    }
    displayError(){

    }
    render() {
        if(this.state.report === null ){
            return (
                <ActivityIndicator color={globalStyle.color} size='large'/>
            )
        }else if (typeof this.state.report === 'object'){
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return (
                <View style={globalStyle.container}>
                    <ListView
                        dataSource={ds.cloneWithRows(this.state.report) }                        
                        renderRow={ (row, j, k) => <DisplayRow day={row} index={k}  /> }    
                    />
                </View>
            )
        }else {
            return (
                <View style={globalStyle.container}>
                    <Text style={globalStyle.dayTitle}> {this.state.city} doe'st not exist, try another one</Text>
                </View>
            )
        }
    }
}