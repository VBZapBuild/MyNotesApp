import React, { useState } from 'react';
import {
    TextInput,
    View,
    StyleSheet,
    StatusBar,
    Button
} from 'react-native';
import { RootStackParamList } from '../navigation/navigation';
import {StackScreenProps} from '@react-navigation/stack'

type Props = StackScreenProps<RootStackParamList, 'detail'>;

export default function DetailScreen({ route, navigation }: Props) {
    console.log(route.params,"this is navi")
    let {data} = route.params;
    let [title,setTitle] = useState(data);
    const onTextChange = (title: string) => {
        console.log(title);
        setTitle(title);
      }
   
      
    
    return (
        <View style={styles.container}>
            <View>
                <StatusBar backgroundColor='#b0c4de' barStyle="light-content" />
                
                <TextInput
                    placeholder="Add Note Title here"
                    value={title}
                    //mode='outlined'
                    onChangeText={onTextChange}
                    style={styles.title}
                />
                <TextInput
                    placeholder="Add Note Description"
                    //value={parah}
                    //onChangeText={}
                    //mode="flat"
                    multiline={true}
                    style={styles.text}
                    scrollEnabled={true}
                    returnKeyLabel='done'
                    blurOnSubmit={true}
                />
            </View>
            <Button
        title="SAVE"
        //onPress={addTask}
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
        fontSize: 16,
        borderColor: 'black',
        borderWidth: 3,
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0,
        backgroundColor: '#219653'
    }

});