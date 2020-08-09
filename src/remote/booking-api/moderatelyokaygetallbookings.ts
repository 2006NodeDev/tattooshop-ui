import { bookingClient } from ".";


export const getAllBookings = async () =>{
    try{
        let response = await bookingClient.get('/bookings')
        return response.data
    }catch(e){
        console.log(e);
        console.log('We should probably handle this');

    }
}