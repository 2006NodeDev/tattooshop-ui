import React, { FunctionComponent, useState, useEffect } from 'react'
import { Shop } from '../../models/Shops'
import {ShopDisplayComponent} from '../ShopDisplayComponent/ShopDisplayComponent'
import { getAllShops } from '../../remote/booking-api/moderatelyokaygetallshops'
import { Button } from '@material-ui/core'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { MapsComponent } from '../MapsComponent/MapsComponent'


export const AllShopsComponent:FunctionComponent<any> = (props) => {

 
    let [allShops, changeAllShops] = useState<Shop[]>([])
    useEffect(()=>{
        const getShops = async ()=>{
            let response = await getAllShops()
            changeAllShops(response)
        }

        if(allShops.length === 0){
            getShops()
        }
    })

    let shopsDisplays = allShops.map((shop)=>{
        return <ShopDisplayComponent key={'shop-key-' + shop.shopId} shop={shop}/>
    })
    return(

        <div>
            {shopsDisplays}
            <Button><Link to='/map'>Map of All Shops</Link></Button>
        <Route path="/map">
          <MapsComponent />
        </Route>
        </div>
    )
}
