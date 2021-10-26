export interface TaskModel {
    title: string;
    desc: string;
}


export interface AddTask{
     type: 'ADD_TASK';
     payload: null;
}
export interface UpdateTask{
    type: 'UPDATE_TASK';
    payload: null;
}
export interface RemoveTask{
    type: 'REMOVE_TASK';
    payload: null;
}

export type TaskActions = AddTask | UpdateTask | RemoveTask