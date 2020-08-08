import React, { FunctionComponent, SyntheticEvent, useState } from 'react'
import { Button, TextField, makeStyles, Theme, createStyles, Typography, Container, Grid, CssBaseline } from '@material-ui/core'
import { Bookings } from '../../models/Bookings'
import { addNewBooking } from '../../remote/moderatelyokay-api/moderatelyokayaddnewbooking'
//import {MuiPickersUtilsProvider} from '@material-ui/pickers'
//import DateFnsUtils from '@date-io/date-fns'
//import {DateTimePicker} from '@material-ui/pickers'


const styles = [
    {
        value: '1',
        label: 'Neo-traditional',
    },
    {
        value: '2',
        label: 'Traditional',
    },
    {
        value: '3',
        label: 'Modern',
    },
    {
        value: '4',
        label: 'Tribal',
    },
    {
        value: '5',
        label: 'New School',
    },
    {
        value: '6',
        label: 'Japanese',
    },
    {
        value: '7',
        label: 'Blackwork',
    },
    {
        value: '8',
        label: 'Illustrative',
    },
    {
        value: '9',
        label: 'Watercolor',
    },
    {
        value: '10',
        label: 'Tribal',
    },
    {
        value: '11',
        label: 'Other',
    },
];

const colors = [
    {
        value: 'true',
        label: 'Color',
    },
    {
        value: 'false',
        label: 'Black and White',
    },
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: theme.spacing(30),
            marginRight: theme.spacing(30),
            alignItems: 'center',
        },
        textField: {
            marginLeft: theme.spacing(10),
            marginRight: theme.spacing(10),
            alignItems: 'center',
            width: 200,
        },
    }),
);
export const AddNewBookingComponent: FunctionComponent<any> = () => {
    const classes = useStyles;
    let [customer, changeCustomer] = useState(0)
    let [style, changeStyle] = useState(0)
    let [size, changeSize] = useState('')
    let [location, changeLocation] = useState('')
    let [imageTest, changeImageTest] = useState('')
    let [color, changeColor] = useState(false)
    let [artist, changeArtist] = useState(0)
    let [shop, changeShop] = useState(0)
    let [date, changeDate] = useState(new Date())


    const updateCustomer = (e: any) => {
        e.preventDefault()
        changeCustomer(e.currentTarget.value)
    }
    const updateStyle = (e: any) => {
        e.preventDefault()
        changeStyle(e.currentTarget.value)
    }
    const updateSize = (e: any) => {
        e.preventDefault()
        changeSize(e.currentTarget.value)
    }
    const updateLocation = (e: any) => {
        e.preventDefault()
        changeLocation(e.currentTarget.value)
    }
    const updateImageTest = (e: any) => {
        e.preventDefault()
        changeImageTest(e.currentTarget.value)
    }
    const updateColor = (e: any) => {
        e.preventDefault()
        changeColor(e.currentTarget.value)
    }
    const updateArtist = (e: any) => {
        e.preventDefault()
        changeArtist(e.currentTarget.value)
    }
    const updateShop = (e: any) => {
        e.preventDefault()
        changeShop(e.currentTarget.value)
    }
    const updateDate = (e: any) => {
        e.preventDefault()
        changeDate(e.currentTarget.value)
    }

    const submitBooking = async (e: SyntheticEvent) => {
        let newBooking: Bookings = {
            bookingId: 0,
            customer,
            style,
            size,
            location,
            imageTest,
            color,
            artist,
            shop,
            date
        }

        let res = await addNewBooking(newBooking)
    }

    //check this, I don't know if it's right
    //customer, artist not null
    //everything else is optional
    //Customer, Style, Artist, Shop are all ID, Maybe do a drop down menu so they don't have to know the # ?
    //style and color are drop down to make it easier
    //date is in the wrong format and I'm not sure how to fix it
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div>
            <form onSubmit={submitBooking}>
                <br></br>
                <Typography component="h5" variant="h5">
                Add New Booking
                </Typography>
                <br></br>

                <Grid container>
                <Grid item>
                <br></br>
                <TextField fullWidth  style={{ margin: 10 }} margin="normal" id="standard-basic" label="Customer" value={customer} onChange={updateCustomer} />
                <br></br>
                <br></br>
                </Grid>
                </Grid>

                <Grid container>
                <Grid item>
                <br></br>
                <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Style"
                    fullWidth  style={{ margin: 10 }} margin="normal" 
                    value={style}
                    onChange={updateStyle}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Please select your style"
                    variant="outlined"
                >
                    {styles.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                <br></br>
                </Grid>
                </Grid>

                <Grid container>
                <Grid item>

                <TextField fullWidth style={{ margin: 10 }} margin="normal" id="standard-basic" label="Size" value={size || ''} onChange={updateSize} />
                <br></br>
                </Grid>
                </Grid>

                <Grid container>
                <Grid item>
                <br></br>
                <TextField fullWidth style={{ margin: 10 }} margin="normal" id="standard-basic" label="Location" value={location || ''} onChange={updateLocation} />
                <br></br>
                </Grid>
                </Grid>

                <Grid container>
                <Grid item>
                <br></br>
                <TextField fullWidth style={{ margin: 10 }} margin="normal" id="standard-basic" label="Image" value={imageTest || ''} onChange={updateImageTest} />
                <br></br>
                </Grid>
                </Grid>

                <Grid container>
                <Grid item>
                <br></br>
                <TextField
                    id="outlined-select-currency-native"
                    select
                    fullWidth style={{ margin: 10 }} margin="normal"
                    label="Color"
                    value={color}
                    onChange={updateColor}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Color or Black and White?"
                    variant="outlined"
                >
                    {colors.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                <br></br>
                </Grid>
                </Grid>

                <Grid container>
                <Grid item>
                <br></br>
                <TextField fullWidth style={{ margin: 10 }} margin="normal" id="standard-basic" label="Artist" value={artist} onChange={updateArtist} />
                <br></br>
                </Grid>
                </Grid>

                <Grid container>
                <Grid item>    
                <br></br>                  
                <TextField fullWidth style={{ margin: 10 }} margin="normal" id="standard-basic" label="Shop" value={shop || 0} onChange={updateShop} />
                <br></br>
                </Grid>
                </Grid>

                <Grid container>
                <Grid item>   
                <br></br>         
                <TextField
                    id="datetime-local"
                    label="Appointment Date and Time"
                    type="datetime-local"
                    fullWidth style={{ margin: 10 }} margin="normal"
                    value={date}
                    onChange={updateDate}
                    defaultValue="2020-08-24T10:30"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br></br>         
                </Grid>
                </Grid>

                <Grid container>
                <Grid item>
                <br></br>
                <Button fullWidth variant="contained" type='submit'>Submit</Button>
                <br></br>   
                <br></br>               
                </Grid>
                </Grid>
            </form>
        </div>
        </Container>
    )
}