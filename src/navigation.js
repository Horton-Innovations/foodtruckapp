import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './components/home/Index';
import AccountScreen from './components/account/Index';
import MapScreen from './components/map/Index';
import AccountStack from './components/account/navigation';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Account: AccountStack,
  Map: MapScreen,
});

export default createAppContainer(TabNavigator);
