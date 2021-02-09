import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParamList} from './types';
import HomeScreen from '../screens/HomeScreen';
import FollowersScreen from '../screens/FollowersScreen';
import {useSelector} from '../utils/declaration';

const Main = createStackNavigator<MainStackParamList>();

export default function MainStack(): JSX.Element {
  const {name} = useSelector((state) => state.userState),
    header = `Followers : ${name}`;
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen name="Home" component={HomeScreen} />
        <Main.Screen
          options={{
            headerTitle: header,
          }}
          name="Followers"
          component={FollowersScreen}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
}
