import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Dashboard from './src/screen/dashboard';
import Detalhes from './src/screen/detalhes';
import Tarefa from './src/screen/tarefa';

export default createStackNavigator({

  Dashboard : { screen : Dashboard, navigationOptions : { header : null } },
  Detalhes : { screen : Detalhes, navigationOptions : { headerTitle : "Detalhes"} }

}, {
  initialRouteName : "Dashboard"
})



