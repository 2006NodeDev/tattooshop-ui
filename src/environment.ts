

export let tbBaseUrl:string
if(process.env['NODE_ENV'] === 'production'){
    tbBaseUrl = '' //we need to figure out whose website will host this
}
