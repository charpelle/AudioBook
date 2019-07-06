import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from '../screens/HomeScreen';

export default createAppContainer(createStackNavigator({
  Home,
}, {
  headerMode: 'none'
}))