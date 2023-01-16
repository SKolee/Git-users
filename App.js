import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import DetailsScreen from './src/screens/DetailsScreen'
import MainScreen from './src/screens/MainScreen'
import SplashScreen from './src/screens/SplashScreen'


const MainStack = createStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{
        cardStyle: { backgroundColor: '#20272D' }
      }}>
        <MainStack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
        <MainStack.Screen name='Main' component={MainScreen} options={{ headerShown: false }} />
        <MainStack.Screen  options={{headerStyle:{backgroundColor:'#20272D'},headerTitleStyle: {
      fontFamily:'Silkscreen-Bold',
      color:'#e6b800'
    },}} name='Details' component={DetailsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default App
