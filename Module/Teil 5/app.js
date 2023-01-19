
const axios = require("axios")

// Make a request for a user with a given ID
axios.get('https://cat-fact.herokuapp.com/facts/random')
  .then(function (response) {
    // handle success
    const data = response.data.text
    console.log(data)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })
  .finally(function () {
    // always executed
  })

