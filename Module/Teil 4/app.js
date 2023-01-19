//https://momentjs.com/docs/#/manipulating/

const moment = require('moment')

const now = moment()

console.log(now.format())
console.log(now.add(1, "year").format("dddd, MMMM Do YYYY, h:mm:ss a"))

