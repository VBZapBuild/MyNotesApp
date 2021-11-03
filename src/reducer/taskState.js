
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

// Reducers

const initialState = []

function taskReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    index: action.index,
                    title: action.title,
                    desc: action.desc
                }
            ]

        case DELETE_TASK:

            console.log('on delete task', action, state)
            return state.filter((item, i) => {
                return item.index != action.index
            })
        case UPDATE_TASK:
            console.log('on update task', action, state)
            return state.map((item) => {
                if (item.index === action.index) {
                    item.title = action.title
                    item.desc = action.desc
                }
                return item;
            })
        // if (state.length > 0) {
        //     state[action.index].desc = action.desc;
        //     state[action.index].title = action.title;
        //     return state;
        // } else {
        //     return [{
        //         title: action.title,
        //         desc: action.desc
        //     }];
        // }
        default:
            return state
    }

}

export default taskReducer
