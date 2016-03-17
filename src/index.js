var cervezas = require('./cervezas.json')
var uniqueRandomArray = require ('unique-random-array')
module.exports = {
    todas: cervezas,
    alazar: uniqueRandomArray(cervezas)
}
