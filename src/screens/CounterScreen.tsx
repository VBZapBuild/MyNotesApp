import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';

export default function CounterScreen() {

    let [count,setCount] = useState(0)

    const handleIncCounter = () => {
        setCount(++count);
    }

    const handleDecCounter = () => {
        setCount(--count);
    }

    const handleResetCounter = () => {
        setCount(0);
    }

  return (

    <View style={styles.container}>
     <Text style={styles.sectionTitle}>Counter value : {count}</Text>
     <Button color="green" title="inc counter" onPress={handleIncCounter}></Button> 
     <Button color="blue" title="dec counter" onPress={handleDecCounter}></Button> 
     <Button color="pink" title="reset counter" onPress={handleResetCounter}></Button> 
    </View>
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