import React from 'react';
import Home from './components/Home.js';
import About from './components/About.js';
import Search from './components/Search.js'
import {TabNavigator} from 'react-navigation';

const Tabs = TabNavigator({
    Search: {screen: Search},
    About: {Screen:About},
    Home: {screen: Home}
})
export default class App extends React.Component {
  render() {
    return (
      <Tabs />
    );
  }
}

