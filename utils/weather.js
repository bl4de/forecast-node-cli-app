'use strict'
/*jshint esversion: 6, -W117*/

const axios = require('axios')

module.exports = async (location) => {
    const results = await axios({
        method: 'get',
        url: 'https://query.yahooapis.com/v1/public/yql',
        params: {
            format: 'json',
            q: `select item from weather.forecast where woeid in
        (select woeid from geo.places(1) where text="${location}") and u='c'`,
        },
    })

    return results.data.query.results.channel.item
}