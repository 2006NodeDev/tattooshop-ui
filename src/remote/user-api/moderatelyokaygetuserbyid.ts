import { userClient } from "../user-api"



export const findUserByIdService = async (userId:number) =>{

    try{
        let response = await userClient.get(`users/${userId}`)
        return response.data
    } catch(e){
        console.log(e);
        console.log(`There has been an error`);
    }
}