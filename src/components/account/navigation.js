import {createStackNavigator} from 'react-navigation-stack';

import AccountHome from './Index';
import TruckItem from './TruckItem';

const AccountStack = createStackNavigator(
  {
    AccountHome: AccountHome,
    TruckItem: TruckItem,
  },
  {
    initialRouteName: 'AccountHome',
    headerMode: 'none',
  },
);

export default AccountStack;
