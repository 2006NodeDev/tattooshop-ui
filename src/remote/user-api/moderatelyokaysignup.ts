import {userClient} from '../user-api'
import {User} from '../../models/User'

export const modokaysignup = async (newUser:User) => {
 
    try{
        let response = await userClient.post('/users', newUser)
        console.log(response);
        return response.data
    }catch(e){
        console.log(e);
        console.log('There has been an error');
    }
     
}