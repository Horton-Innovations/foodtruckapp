import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './components/home/Index';
import AccountScreen from './components/account/Index';
import MapScreen from './components/map/Index';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Account: AccountScreen,
  Map: MapScreen,
});

export default createAppContainer(TabNavigator);
