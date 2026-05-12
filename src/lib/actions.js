export const createATask = async(FormData) =>{
    'use server'
    const name = FormData.get('name');
    console.log(FormData);
}