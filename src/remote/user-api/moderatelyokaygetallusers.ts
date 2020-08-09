import { userClient } from "../user-api";


export const getAllUsers = async () =>{
    try{
        let response = await userClient.get('/users')
        return response.data
    }catch(e){
        console.log(e);
        console.log('We should probably handle this');

    }
}