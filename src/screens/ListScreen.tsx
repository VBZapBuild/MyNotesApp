import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Task from '../components/Task';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TASK,DELETE_TASK } from '../reducer/taskState';
import store from '../reducer/store';
interface iTask {
  index: number,
  title: string;
  desc: string;
}
export default function ListScreen({ navigation }: any) {
const taskItems = useSelector(state => state)
const dispatch = useDispatch()

  console.log(taskItems,'from use selector')
  const [task, setTask] = useState<iTask>();

  const handleAddTask = () => {
    // this function will log the task in the state
    console.log("crent task", task)
    
    if (task?.title) {
      Keyboard.dismiss();
      dispatch({
        type : ADD_TASK,
        title:task.title,
        desc:task.desc,
        index: taskItems.length
      });
      setTask({
        title: '',
        desc: '',
        index: 0,
      });
    }

  }
  const completeTask = (index: number) => {
    dispatch({
      type: DELETE_TASK,
      index : index
    })
  }

  const moveToDetail = (index: number) => {
    navigation.navigate('detail', {
      index: index,
    });
  }

  const onTextChange = (text: string) => {
    setTask({ ...task, title: text, desc: '',index:0 });
  }

  const ItemList = ({taskItems}) => {
    console.log(taskItems,'this is task items');
    return taskItems.map((item: iTask, index: number) => {
      console.log('this is item',item,index);
      return (
        <TouchableOpacity key={item.index} onPress={() => moveToDetail(item.index)}>
          <Task data={item} onComplete={completeTask} index={item.index} />
        </TouchableOpacity>)
    });
  }

  return (

    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Add Notes</Text>
        <View style={styles.items}>
          <ItemList taskItems={taskItems}></ItemList>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper} >
        <TextInput style={styles.input} placeholder={'write a task'} value={task?.title} onChangeText={onTextChange} />
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
    backgroundColor: '#000000',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white'
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
    backgroundColor: '#d3d3d3',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#b0c4de',
    borderWidth: 1,
  },
  addText: {
    color: 'grey',
    fontSize: 30
  },
});