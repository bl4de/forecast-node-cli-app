'use strict'
/*jshint esversion: 6, -W117*/

module.exports = (message, exit) => {
    console.error(message)
    exit && process.exit(1)
}