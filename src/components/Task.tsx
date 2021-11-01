import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props: any) => {
    let {data ,index,onComplete} = props;

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemTitle}>{data.title}</Text>
            </View>
            <TouchableOpacity onPress={() => onComplete(index)}>
            <Text style={{fontSize:25,color:'red'}}>X</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#000080',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemTitle: {
        maxWidth: '80%',
        color: 'black',
        fontSize: 23
    },
    circular: {
        width: 15,
        height: 15,
        borderColor: '#b22222',
        borderWidth: 2,
        borderRadius: 5,
    },

});
export default Task;