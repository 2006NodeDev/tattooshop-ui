import React, { useState } from 'react';
import './App.css';
import {NavBarComponent} from './components/NavBarComponent/NavBarComponent'
import {LoginComponent} from './components/LoginComponent/LoginComponent'
import {SignUpComponent} from './components/SignupComponent/SignupComponent'
import {ProfileComponent} from './components/ProfileComponent/ProfileComponent'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { AddNewBookingComponent } from './components/AddNewBookingComponent/AddNewBookingComponent';
import { User } from './models/User';
import { UpdateUserComponent } from './components/UpdateUserComponent/UpdateUserComponent';
import {AllShopsComponent } from './components/GetAllShopsComponent/GetAllShopsComponent';
import {MapsComponent} from './components/MapsComponent/MapsComponent'
//import { GetAllShopsComponent } from './components/GetAllShops/GetAllShops';
import {HomepageComponent} from './components/HomepageComponent/HomepageComponent';
import { UpdateBookingComponent } from './components/UpdateBookingComponent/UpdateBookingComponent';
//import { getAllBookings } from './remote/moderatelyokay-api/moderatelyokaygetallbookings';
import { AllBookingsComponent } from './components/GetAllBookingsComponent/GetAllBookingsComponent';


//add new booking is there for testing, it does not have to stay there or even keep the same path.
function App() {
  const [currentUser, changeCurrentUser] = useState<null | User>(null)
  return (
    <div className="App">
      <Router>
      <NavBarComponent user={currentUser}/>
        <Route exact path='/' component={HomepageComponent} />
        <Route path='/login' render={(props)=>(<LoginComponent changeCurrentUser={changeCurrentUser} {...props} />)} />
        <Route path='/signup' render={()=>(<SignUpComponent/>)} />
        <Route path='/profile/:userId' component={ProfileComponent}/>
        <Route path='/addnewbooking' component={AddNewBookingComponent}/>
        <Route path='/updatebooking' component={UpdateBookingComponent}/>
        <Route path='/allbookings' component={AllBookingsComponent}/>
        <Route path='/edituser' component={UpdateUserComponent}/>
        <Route path='/shops' component={AllShopsComponent}/>
        <Route path='/map' component={MapsComponent}/>
      </Router>
    </div>
  );
}

export default App;
