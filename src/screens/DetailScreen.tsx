import React, { useState } from 'react';
import {
    TextInput,
    View,
    StyleSheet,
    StatusBar,
    Button
} from 'react-native';
import { RootStackParamList } from '../navigation/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_TASK} from '../reducer/taskState'
import ListScreen from './ListScreen';
import store from '../reducer/store';

type Props = StackScreenProps<RootStackParamList, 'detail'>;

export default function DetailScreen({ route, navigation }: Props) {
    const taskDetail = useSelector(state => state)
    const dispatch = useDispatch();
    let { index } = route.params;
    let [title, setTitle] = useState(taskDetail[index].title);
    let [desc, setDesc] = useState(taskDetail[index].desc);
    console.log("indsdeaidnsdi" ,taskDetail,index)
    const onTextChange = (title: string) => {
        console.log(title);
        setTitle(title);
    }
    const onDescChange = (desc: string) => {
        setDesc(desc);
    }
    const onSave = () => {
        console.log("onSave is called",index)
        dispatch({
            type : UPDATE_TASK,
            title:title,
            desc:desc,
            index:index,
        })
        navigation.navigate('list')
    }
    return (
        <View style={styles.container}>
                <StatusBar backgroundColor='#b0c4de' barStyle="light-content" />
                <TextInput
                    placeholder="Add Note Title here"
                    value={title}
                    onChangeText={onTextChange}
                    style={styles.title}
                />
                <TextInput
                    placeholder="Add Note Description"
                    value={desc}
                    onChangeText={onDescChange}
                    multiline={true}
                   style={styles.text}
                    scrollEnabled={true}
                    returnKeyLabel='done'
                    blurOnSubmit={true}
                />
            <Button 
            title= "SAVE"
            onPress={onSave}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    iconButton: {
        backgroundColor: '#219653',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#7cfc00'
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        borderColor: 'black',
        borderWidth: 3,
    },
    text: {
        height: 300,
        fontSize: 25,
        borderColor: 'black',
        borderWidth: 3,
        fontWeight: 'normal',
    },

});