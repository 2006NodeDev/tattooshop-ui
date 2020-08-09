import { userClient } from "../user-api";


export const getAllArtistsService = async () =>{
    try{
        let response = await userClient.get('/artists')
        return response.data
    }catch(e){
        console.log(e);
        console.log('We should probably handle this');

    }
}