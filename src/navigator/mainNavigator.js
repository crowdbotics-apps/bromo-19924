import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings96308Navigator from '../features/Settings96308/navigator';
import Settings96300Navigator from '../features/Settings96300/navigator';
import UserProfile96298Navigator from '../features/UserProfile96298/navigator';
import Settings96191Navigator from '../features/Settings96191/navigator';
import Settings96174Navigator from '../features/Settings96174/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings96308: { screen: Settings96308Navigator },
Settings96300: { screen: Settings96300Navigator },
UserProfile96298: { screen: UserProfile96298Navigator },
Settings96191: { screen: Settings96191Navigator },
Settings96174: { screen: Settings96174Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
