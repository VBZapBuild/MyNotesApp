import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import CounterScreen from './src/screens/CounterScreen';

export type RootStackParamList = {
  list: undefined,
  detail:
  {
    data: any,
    add: any
  }
};

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
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  );
}
