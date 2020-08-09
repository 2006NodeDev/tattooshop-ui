import {bookingClient} from '.'
import {Bookings} from '../../models/Bookings'


export const modokaysignup = async (newBookings:Bookings) => {
 
    try{
        let response = await bookingClient.post('/bookings', newBookings)
        console.log(response)
    }catch(e){

    }
     
}