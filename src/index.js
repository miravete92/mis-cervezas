var cervezas = require('./cervezas.json')
var uniqueRandomArray = require ('unique-random-array')
var _ = require('lodash')
module.exports = {
 	todas: _.sortBy(cervezas, ['nombre']),
    alazar: uniqueRandomArray(cervezas)
}
