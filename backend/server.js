const express = require('express')
const routes = require('./routes')

const app = express()
const port = 8081


// Access public folder
app.use(express.static(__dirname + '/public'));

app.use('/', routes);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
