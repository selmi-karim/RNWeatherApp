import React from 'react';
import {View, Text, Image} from 'react-native';
import globalStyle from './styles/styles.js'

export default class About extends React.Component {
    

    render() {
        let profil = 'https://avatars0.githubusercontent.com/u/21101482?s=400&u=9b552297e46f30be0186a70e74c6137f1c113b62&v=4';
        return (
            <View style={globalStyle.container}>
                 <Image
                    style={{width: 200, height: 200}}
                    source={{uri: profil}}
                />
                <Text style={globalStyle.dayTitle}>
                    Kerim SELMI
                </Text>
                <Text style={globalStyle.title}>
                    I'm a Full Stack Javascript Developer
                    Check my personal website for
                    more informations: karimation.com
                </Text>

                
            </View>
        )
    }
}