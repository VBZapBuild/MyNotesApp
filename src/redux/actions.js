
export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

//Action
export function addTask(task) {
   console.log("nsode aff tass ,tas", task)
   return {
      type: ADD_TASK,
      id: task.index,
      title: task.title,
      desc: task.desc
   }
}

export function deleteTask(id) {
   return {
      type: DELETE_TASK,
      payload: id
   }
}

export function updateTask(id, task) {
   console.log('inside update task', id, task);
   return {
      type: UPDATE_TASK,
      id: id,
      title: task.title,
      desc: task.desc
   }
}