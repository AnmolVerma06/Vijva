import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import ProfilePage from './Profilepage';
import GetHelplineInformation from './GetHelplineInformattion';
import FAQ from './FAQ';
import Resources from './Resources';
import NeedHelp from './NeedHelp';
import SOS from './SOS';
import SendingDistressSignal from './SendingDistressSignal';
import DistressSignalSent from './DistressSignalSent';
import ChatwithVolunteer from './ChatwithVolunteer';
import { NotificationProvider } from './NotificationContext';

const Stack = createStackNavigator();

function App() {
  return (
      <NotificationProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GetHelplineInformation"
          component={GetHelplineInformation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FAQ"
          component={FAQ}
          options={{ headerShown: false }}
        />
         <Stack.Screen
           name="Resources"
           component={Resources}
           options={{ headerShown: false }}
         />
         <Stack.Screen
            name="NeedHelp"
            component={NeedHelp}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="SOS"
            component={SOS}
            options={{ headerShown: false }}
         />
         <Stack.Screen
             name="SendingDistressSignal"
             component={SendingDistressSignal}
             options={{ headerShown: false }}
                  />
         <Stack.Screen
             name="DistressSignalSent"
             component={DistressSignalSent}
             options={{ headerShown: false }}
         />
          <Stack.Screen
              name="ChatwithVolunteer"
              component={ChatwithVolunteer}
              options={{ headerShown: false }}
                  />



      </Stack.Navigator>
    </NavigationContainer>
    </NotificationProvider>
  );
}

export default App;
