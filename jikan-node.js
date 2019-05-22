const Request = require('./lib/Request')

module.exports = class JikanNode {

    constructor() {
        this.request = new Request
    }

    /**
     * 
     * @param {integer} id anime ID
     * @param {string} request character_staff, episodes, news, pictures, videos, stats, forum, moreinfo, reviews, recommendations, userupdates
     * @param {integer} page can be used to select pages when needed
     */
    async findAnime(id, request, page) {
        return await this.request.send(['anime', id, request, page])
    }

    /**
     * 
     * @param {integer} id manga ID 
     * @param {string} request characters, news, pictures, stats, forum, moreinfo, reviews, recommendations, userupdates 
     * @param {integer} page can be used to select pages when needed 
     */
    async findManga(id, request, page) {
        return await this.request.send(['manga', id, request, page])
    }

    /**
     * 
     * @param {integer} id person ID
     * @param {string} request pictures
     */
    async findPerson(id, request) {
        return await this.request.send(['person', id, request])
    }

    /**
     * 
     * @param {integer} id character ID
     * @param {string} request pictures
     */
    async findCharacter(id, request) {
        return await this.request.send(['character', id, request])
    }

    /**
     * 
     * @param {string} type anime/manga/people ect
     * @param {string} title title 
     * @param {object} param page, type, status, rated, genre, score, start_date, end_date, genre_exclude | ex. {page: 2, score: 7}
     *
     */
    async search(type, title, param) {
        const params = {'q': title, ...param}
        return await this.request.send(['search', type], params)

    }

    /**
     * 
     * @param {string} season summer, fall, winter, spring
     * @param {integer} year ex. 2019
     */
    async findSeason(season, year) {
        return await this.request.send(['season', year, season])
    }

    /**
     * 
     * @param {string} day monday, tuesday, wednesday, ect.., other, unknown. pass nothing will
     * return the schedule for all days of the week 
     */
    async findSchedule(day) {
        return await this.request.send(['schedule', day])
    }

    /**
     * 
     * @param {string} type anime, manga, people, characters 
     * @param {integer} page optional page number 
     * @param {string} subtype returns a filtered list 
     */
    async findTop(type, page, subtype) {
        return await this.request.send(['top', type, page, subtype])
    }

    /**
     * 
     * @param {string} type anime or manga 
     * @param {integer} id genre id
     * @param {integer} page page number
     */
    async findGenre(type, id, page) {
        return await this.request.send(['genre', type, id, page])
    }

    /**
     * 
     * @param {integer} id producer id 
     * @param {integer} page page number
     */
    async findProducer(id, page) {
        return await this.request.send(['producer', id, page])
    }

    /**
     * 
     * @param {integer} id magazine id 
     * @param {integer} page page number
     */
    async findMagazine(id, page) {
        return await this.request.send(['producer', id, page])
    }

    /**
     * 
     * @param {string} username username
     * @param {string} request profile, history, friends, animelist, mangalist
     * @param {string} data watching, ptw, onhold, ect
     * @param {Object} param page sort search
     */
    async findUser(username, request, data, param) {
        return await this.request.send(['user', username, request, data], param)
    }

    /**
     * 
     * @param {integer} id id of club 
     * @param {string} request members
     */
    async findClub(id, request) {
        return await this.request.send(['club', id, request ])
    }
}