const fetch = require('node-fetch')
const url = require('url');

module.exports = class Request {
    constructor(){
        this.baseURL = "https://api.jikan.moe/v3"
    }
    
    async send(args, params) {
        var res = await fetch(this.createUrl(args, params))
        var data = await res.json()
        if (res.status !== 200) throw `Response: ${res.status}`
        else return data
    }

    createUrl (args, params) {
        const url = new URL(this.baseURL)
        url.pathname += `/${args.filter(a => a).join("/")}`
        console.log(params)
            for (let p in params) {
                if (params[p] !== undefined) {
                    url.searchParams.set(p, params[p])
            }
        }
        return url.href
    }
}
