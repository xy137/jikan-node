let Request = require('./lib/Request')

class JikanNode {

    constructor() {
        this.request = new Request
    }

    /**
     * 
     * @param {integer} id Anime ID
     * @param {string} request character_staff, episodes, news, pictures, videos, stats, forum, moreinfo, reviews, recommendations, userupdates
     * @param {integer} param can be used to select pages when needed
     */
    async findAnime(id, request, param) {
        return await this.request.send(['anime', id, request, param])
    }

    /**
     * 
     * @param {integer} id Manga ID 
     * @param {string} request characters, news, pictures, stats, forum, moreinfo, reviews, recommendations, userupdates 
     * @param {integer} param can be used to select pages when needed 
     */
    async findManga(id, request, param) {
        return await this.request.send(['manga', id, request, param])
    }

    /**
     * 
     * @param {integer} id Person ID
     * @param {string} request pictures
     */
    async findPerson(id, request) {
        return await this.request.send(['person', id, request])
    }

    /**
     * 
     * @param {integer} id Character ID
     * @param {string} request pictures
     */
    async findCharacter(id, request) {
        return await this.request.send(['character', id, request])
    }
    /**
     * 
     * @param {string} type  
     * @param {*} show 
     * @param {*} param 
     * @param {*} arg 
     */
    async search(type, show, param, arg) {
        return await this.request.send(['search', type], {q: show, [param]: arg })

    }

}

var b = new JikanNode

b.search('anime', "Grand Blue", "page", "1").then(a => console.log(a), c => console.log(c))
