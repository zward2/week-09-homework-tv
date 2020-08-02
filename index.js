
const showdata = require('./showdata')
const { app } = require('./common-app')

app.set('view engine', 'pug')

app.get('/', (request, response) => {
    return response.render('index', { showdata })
})

app.get('/season/:number', (request, response) =>{
    const seasons = showdata.seasons.find((season) => season.number === parseInt(request.params.number))

    return response.render('season', { seasons })
})

app.all('*', (request, response) => {
    return response.sendStatus(404)
}) 

app.listen(1337, () => {
    console.log('Listening on http://localhost:1337')
})