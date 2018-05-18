import React from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import Search from './components/Search.js'
import {createMaterialTopTabNavigator} from 'react-navigation';

const Tabs = createMaterialTopTabNavigator({
    Home: { screen: Home },
    Search: { screen: Search },
    About: { screen: About },
})

export default class App extends React.Component {
  render() {
    return (
      <Tabs />
    );
  }
}

