import { revalidatePath } from "next/cache";
import { postTask } from "./task";

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