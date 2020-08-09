import { bookingClient } from "."



export const findBookingByUserId = async (userId:number) =>{

    try{
        let response = await bookingClient.get(`/bookings/author/userId/${userId}`)
        return response.data
    } catch(e){
        console.log(e);
        console.log(`There has been an error`);
    }
}