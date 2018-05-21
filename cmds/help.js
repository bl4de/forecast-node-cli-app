'use strict'
/*jshint esversion: 6, -W117*/

const menus = {
    main: `
    outside [command] <options>

    today .............. show weather for today
    version ............ show package version
    help ............... show help menu for a command\n\n`,

    today: `
    outside today <options>

    --location, -l ..... the location to use\n\n`,
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help' ?
        args._[1] :
        args._[0]

    console.log(menus[subCmd] || menus.main)
}