import { bookingClient } from "."
import { Bookings } from "../../models/Bookings";



export const addNewBooking = async (newBookings:Bookings) =>{
    try{
        let response = await bookingClient.post('/bookings', newBookings)
        console.log(response);
        return response.data
    }catch(e){
        console.log(e);
        console.log('There has been an error');
    }
}