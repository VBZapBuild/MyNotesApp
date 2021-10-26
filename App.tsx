import React from 'react';
import Navigation from './src/navigation/navigation';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/reducer/store';
export default function App() {
  return (
    <StoreProvider store = {store}>
    <Navigation></Navigation>
    </StoreProvider>
  );
}
