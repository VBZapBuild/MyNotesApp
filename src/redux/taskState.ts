import { ADD_TASK, DELETE_TASK } from "./actions";

const initialState = []

function taskReducer(state = initialState, action) {
    console.log(state, action, "this is state and action");
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    desc: action.desc
                }
            ]

        case DELETE_TASK:

            return state.splice(action.payload, 1)

        // case UPDATE_TASK:
        //     // const updateNewArray = update(state, obj => {
        //     //     return obj.id != action.payload
        //     // })
        //     // let updateObj = state[action.id]
        //     // updateObj.title = action.title;
        //     // updateObj.desc = action.desc;
        //     // state[action.id] = updateObj;
        //     if (state.length > 0) {
        //         state[action.id].desc = action.desc;
        //         state[action.id].title = action.title;
        //     }
        //     return [{
        //         title: action.title,
        //         desc: action.desc
        //     }];

        default:
            return state
    }

}

export default taskReducer
