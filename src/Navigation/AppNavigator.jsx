import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationOptions from './navigationOptions';
import { useTheme } from 'react-native-paper';
import Home from '../Screens/Home';
import BottomNavigator from './BottomNavigator';

const Stack = createNativeStackNavigator();
const AppNavigator = ({ userDetails }) => {
  const {colors} = useTheme();
  const options = navigationOptions(colors);
  const editProfile = () =>{

  };
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomNavigation" component={BottomNavigator} options={{ ...options, headerShown: false,title: 'Dashboard', headerRight: () => <></> }} />
      
      {/* {userDetails.cookie && userDetails.isGroupIncluded ? (
        <>
            <Stack.Screen name='AddEarn' component={AddEarn} options={{ ...options, title: 'Add earn' }} />
            <Stack.Screen name='AddExpend' component={AddExpend} options={{ ...options, title: 'Add expend' }} />
            <Stack.Screen name='EditProfile' component={EditProfile} options={{ ...options, title: 'Edit profile' }} />
        </>
      ) : userDetails.cookie ? (
        <>
          <Stack.Screen name="CreateGroup" component={CreateGroup} options={({navigation})=>({ ...options, title: 'Create Group',headerRight: ()=> <HeaderRightButton iconName="user" onPress={()=> navigation.navigate('Profile')} colors={colors}/> })}/>
          <Stack.Screen name="CreateNewGroup" component={CreateGroup} options={{...options,title:"Create new group"}} />
          <Stack.Screen name='ExistingGroup' component={CreateGroup} options={options} />
          <Stack.Screen name='Profile' component={Profile} options={{ ...options, title:"Profile", headerRight: () => <HeaderRightButton iconName="user-edit" onPress={editProfile} colors={colors} /> }} />
          <Stack.Screen name='OtpVerification' component={OtpVerification} options={{ ...options, title:"User verification" }} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name='OtpVerification' component={OtpVerification} options={{ ...options, title:"User verification" }} />
        </>
      )} */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
