import React from 'react';
import { NavigationContainer } from '@react-navigation/native'


import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export const Routes = () => {

    // const { user } = {user: null};
    // const { user } = {username: 'Filipe Arruda'};

  return (
      <NavigationContainer>
            {/* {user ? <AppRoutes /> : <AuthRoutes />} */}
            <AuthRoutes />
      </NavigationContainer>
  )
}
