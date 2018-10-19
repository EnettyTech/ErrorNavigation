/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import ROUTER from './src/router'
AppRegistry.registerComponent(appName, () => ROUTER);
