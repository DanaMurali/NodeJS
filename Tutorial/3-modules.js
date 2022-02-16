// Node uses CommonJS library under the hood.
// Every file in node is a module (by default).
// Modules - Encapsulated Code (ES6) (only share minimum - share what we want).

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-syntax')
require('./7-mind-grenade')

sayHi('Bob')
sayHi(names.john)
sayHi(names.peter)