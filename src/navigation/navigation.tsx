import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';

export type RootStackParamList = {
    list: undefined,
    detail: 
    {
        data: any,
        add :any
    }
  };



const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                
                <Stack.Screen name="list" component={ListScreen} />
                <Stack.Screen name="detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;