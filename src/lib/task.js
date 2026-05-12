import task from '../data/task.json';

export const getTask = async ()=>{
    return task
}

export const postTask = async (data)=>{
    data.id = task.length + 1 ;
    task.push(data);
    return{ok: true , massage :"task added" }
}


export const newPostTask = async (newData) => {
    newData.id = task.length + 1 ;
    task.push(newData);
    return{ok: true }
}