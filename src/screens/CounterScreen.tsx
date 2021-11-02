import React from 'react';
import {
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

export default function CounterScreen() {

  const count = useSelector(state => state.count.count)
  const dispatch = useDispatch()

  const handleIncCounter = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const handleDecCounter = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const handleResetCounter = () => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>Counter value : {count}</Text>
      <Button color="green" title="inc counter" onPress={handleIncCounter}></Button>
      <Button color="blue" title="dec counter" onPress={handleDecCounter}></Button>
      <Button color="pink" title="reset counter" onPress={handleResetCounter}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dc143c',
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'grey',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 270,
    color: 'white',
    fontSize: 30
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    color: 'grey',
    fontSize: 30
  },
});