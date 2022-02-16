// Node uses CommonJS library under the hood.
// Every file in node is a module (by default).
// Modules - Encapsulated Code (ES6) (only share minimum - share what we want).

const names = require('./4-names')
const sayHi = require('./5-utils')


sayHi('Bob')
sayHi(names.john)
sayHi(names.peter)