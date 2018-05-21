'use strict'
/*jshint esversion: 6, -W117*/

const {
    version
} = require('../package.json')

module.exports = (args) => {
    console.log(`v${version}`)
}