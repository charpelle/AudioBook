import { createAppContainer, createStackNavigator } from 'react-navigation'

import Home from '../screens/HomeScreen';
import Book from '../screens/BookScreen';

export default createAppContainer(createStackNavigator({
  Book,
  Home,
}, {
  headerMode: 'none'
}))