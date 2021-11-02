import {
   INCREMENT,
   DECREMENT
} from "./actions";

// interface CounterType {
//    count: number;
// }

const initialState = {
   count: 0
}

function counterReducer(state = initialState, action: any) {
   console.log(state, action, "this is state and action");
   switch (action.type) {
      case INCREMENT:
         return {
            count: state.count + 1
         }
      case DECREMENT:
         return {
            count: state.count - 1
         }
      default:
         return state
   }

}

export default counterReducer
