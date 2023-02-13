/*
- jest mit npm installieren
- babel.config.js erstellen
- opt. in package.json script test erstellend as jest aufruft
- tests erstellen (dateiname.test.js)
- mit "npm run test" Tests ausführen
*/

function add(a, b){
    if(b === 0){
        return -5
    }
    return a + b
}

module.exports.add = add