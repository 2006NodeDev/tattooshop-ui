import { bookingClient} from ".";
import { Bookings } from "../../models/Bookings"



export const modOkayUpdateBookings = async (updatedBookings:Bookings) =>{
    try{
        console.log(updatedBookings);
        let response = await bookingClient.patch('/bookings', updatedBookings)
        console.log(response);
        return response.data
    }catch(e){
        console.log(e);
        console.log('There has been an error');
    }
}