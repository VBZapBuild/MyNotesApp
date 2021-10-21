import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  Platform,
  StyleSheet
} from 'react-native';
import Task from '../components/Task';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function ListScreen({ navigation }: any) {
  const [task, setTask] = useState<string>('');
  const [taskItems, setTaskItems] = useState<Array<string>>([]);
  // so that array of tasks appear
  const handleAddTask = () => {
    // this function will log the task in the state
    console.log("crent task", task)

    if (task.length) {
      Keyboard.dismiss();
      setTaskItems(taskItems => [...taskItems, task])
      setTask('');
    }

  }
  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    // navigation -> you can pass props -> taskItems[index] 
    setTaskItems(itemsCopy);
  }

  const moveToDetail = (index: number) => {
    console.log(index, taskItems, taskItems[index]);
    navigation.navigate('detail', {
      data: taskItems[index]
    });
  }

  const onTextChange = (task: string) => {
    console.log(task);
    setTask(task);
  }

  return (

    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Your Tasks For Today</Text>
        <View style={styles.items}>
          {/* all tasks will be added here  */}
          {
            taskItems.map((item: any, index: number) => {
              return (
                <TouchableOpacity key={index} onPress={() => moveToDetail(index)}>
                  <Task text={item} onComplete={completeTask} index={index} />
                </TouchableOpacity>)
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper} >
        <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={onTextChange} />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0c4de',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
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