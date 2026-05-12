export const createATask = async(FormData) =>{
    'use server'
    const name = FormData.get('name');
    console.log("my name is ",name, "Yes i know may name is soo nice");
}