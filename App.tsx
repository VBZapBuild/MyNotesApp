import React from 'react';
import Navigation from './src/navigation/navigation';
import store from './src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';
import { Provider as StoreProvider } from 'react-redux';
import CounterScreen from './src/screens/CounterScreen';

// export default function App() {
//   return (
//     <StoreProvider store={store}>
//       <Navigation />
//     </StoreProvider>

export type RootStackParamList = {
  list: undefined,
  detail:
  {
    data: any,
    add: any
  }
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    // <StoreProvider store = {store}>
    // {/* <Navigation></Navigation> */}
    // <NavigationContainer>
    //         <Stack.Navigator
    //             screenOptions={{
    //                 headerShown: false
    //             }}>

    //             <Stack.Screen name="list" component={ListScreen} />
    //             <Stack.Screen name="detail" component={DetailScreen} />
    //         </Stack.Navigator>
    //     </NavigationContainer>
    // </StoreProvider>
    <CounterScreen />
  );
}
