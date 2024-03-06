import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WorkoutList from './screens/WorkoutList.js';
import { WorkoutProvider } from './context/MyContexts.js';
import AddingWorkouts from './screens/AddingWorkouts.js';
import { PaperTheme } from './style/Styles.js';
import Settings from './screens/Settings.js';
import {useFonts} from 'expo-font';

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  const [loaded] = useFonts({
    LatoRegular: require ('./assets/fonts/Lato-Regular.ttf'),
    LatoBold: require ('./assets/fonts/Lato-Regular.ttf'),
    LatoBlack: require ('./assets/fonts/Lato-Black.ttf'),

  });
  if (!loaded) {
    return null;
  }
  
  return (
    <WorkoutProvider>
      <PaperProvider theme={PaperTheme}>
        <NavigationContainer theme = {PaperTheme}>
        <Tab.Navigator 
        initialRouteName="Adding Workouts"
        activeColor="#c1d6f3"
        inactiveColor='#c1d6f3'
        barStyle={{ backgroundColor: '#354e6f' }}
        >
          <Tab.Screen 
              name="Add Workouts" 
              component={AddingWorkouts} 
              options={{
                tabBarLabel: 'Add Workouts',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
              ),      

          }}
          />
          <Tab.Screen 
              name="Workout List" 
              component={WorkoutList} 
              options={{
              tabBarLabel: 'Workout List',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen 
              name="Settings" 
              component={Settings} 
              options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cogs" color={color} size={26} />
              ),
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
      </PaperProvider>
    </WorkoutProvider>
  );
}