const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <p>Enjoy this kitten photo instead of what you were looking for!</p>
              <img src="https://placekitten.com/500/500" alt="Picture of a kitten"/>
              <p>Image from placekitten.com</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404

