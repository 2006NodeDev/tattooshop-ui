

export let tbBaseUrl:string
if(process.env['NODE_ENV'] === 'production'){
    tbBaseUrl = 'http://localhost:80/tattooshop-user-service'  // I will need to update this based on nginx
} else {
    tbBaseUrl = 'http://localhost:2006' // this should be like  https://tattooshop.bfirdevs.com
}
