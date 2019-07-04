const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express()

//Settings, configuración del servidor
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))

//Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

//Routes
app.use(require('./routes/index.routes'))

//Errors
app.use((err, req, res, next) => {
  res.send({ error: err.message })
})

//Public
app.use(express.static(path.join(__dirname, '../public')))

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
})
