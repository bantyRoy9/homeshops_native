import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import navigationOptions from './navigationOptions';
import { useTheme } from 'react-native-paper';
import Home from '../Screens/Home';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
    const {colors,dark} = useTheme();
    const options = navigationOptions(colors);
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarLabelPosition:'below-icon', tabBarActiveTintColor: colors[dark?'HeaderText':'HeaderBg'],tabBarActiveBackgroundColor:colors.surfaceVariant,tabBarStyle:{backgroundColor:colors.background}}}>
        <Tab.Screen name="Home" component={Home} options={{...options,title: 'Dashboard',tabBarShowLabel:false,   tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size} />)}}/>
        <Tab.Screen name="Members" component={Home} options={{...options,title: 'Members',tabBarShowLabel:false,   tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account-group" color={color} size={size} />)}}/>
        <Tab.Screen name="Analysis" component={Home} options={{...options,title: 'Analysis',tabBarShowLabel:false, tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="chart-pie" color={color} size={size} />)}}/>

    </Tab.Navigator>
  );
}

export default BottomNavigator;
