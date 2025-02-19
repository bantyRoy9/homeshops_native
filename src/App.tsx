/**
 * 
 * @BANTI_KUMAR
 */
import React, { useState, } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Navigation/AppNavigator';
const App = () => {
  const [userDetails, setUserDetails] = useState(null);
  return (
    <NavigationContainer>
      {/* {userDetails ?  */}
      <AppNavigator userDetails={userDetails} /> 
      {/* : null} */}
    </NavigationContainer>
  );
};

export default App;
