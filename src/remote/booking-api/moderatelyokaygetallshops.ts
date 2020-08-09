import { bookingClient } from "."



export const getAllShops = async () =>{

    try{
        let response = await bookingClient.get(`/bookings/shops`)
        return response.data
    } catch(e){
        console.log(e);
        console.log(`There has been an error`);
    }
}