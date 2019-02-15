const fetch = require('node-fetch')
const url = require('url');

class Request {
    constructor(){
        this.baseURL = "https://api.jikan.moe/v3"
    }
    async send(args, params) {
        fetch(this.createUrl(args, params))
            .then(res => res.json())
            .then(json => {return json})

    }

    createUrl (args, params) {
        const url = new URL(this.baseURL)
        url.pathname += '/' + args.join('/')
        if (params) {
            for (let p in params)
                url.searchParams.append(p, params[p])
        }
        console.log(url.href)
        return url.href
    }
}

var n = new Request
n.send(['anime', '37510'])
