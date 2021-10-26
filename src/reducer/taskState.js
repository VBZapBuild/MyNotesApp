import remove from 'lodash.remove'
import update from 'lodash.update'
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
let taskID = 0

//Action
export function addTask(task) {
    return {
        type: ADD_TASK,
        id: taskID++,
        task
    }
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export function updateTask(id, task) {
    return {
        type: UPDATE_TASK,
        id: id,
        payload: task
    }
}

// Reducers

const initialState = []

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id: action.id,
                    note: action.task
                }
            ]

        case DELETE_TASK:
            const deleteNewArray = remove(state, obj => {
                return obj.id != action.payload
            })

            return deleteNewArray

        case UPDATE_TASK: 
            const updateNewArray = update(state, obj => {
                return obj.id != action.payload
            })
        default:
            return state
    }

}

export default taskReducer
