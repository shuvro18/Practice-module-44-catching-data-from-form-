import { revalidatePath } from "next/cache";
import { newPostTask, postTask } from "./task";
import { redirect } from "next/dist/server/api-utils";

export const createATask = async(FormData) =>{
    'use server'
    const data = Object.fromEntries(FormData.entries());
    
    console.log(data);
    const res = await postTask(data);
    if(res.ok){
        revalidatePath("/taskPage");

    }
    return res;
}

export const newTask = async(formdata) => {
    'use server'
    
    const newData = Object.fromEntries(formdata.entries());
    console.log(newData)
    const res = await newPostTask(newData);
    if(res.ok){
        revalidatePath("/taskPage");
        redirect("/taskPage");
        
    }
    return res ;
}