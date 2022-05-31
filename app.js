import express from 'express'
//import 'dotenv/config'
import routerCat from './routes/category.js'
import routerToys from './routes/toys.js'

const app = express()
const port = 3000
import mongoose from 'mongoose';
app.use("/toys", routerToys)
app.use("/categories", routerCat)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send('My first API')
})



//route toys par categories
app.get('/categories/:name/toys', (req, res) => {
    let index
    if (req.params['name'] == 'Videogames') {
        index = 0
    }
    if (req.params['name'] == 'Boardgames') {
        index = 1
    }
    if (req.params['name'] == 'Outdoor') {
        index = 2
    }
    //console.log(index);
    let toysByCat = []

    for (let i = 0; i <= toys.length - 1; i++) {
        console.log(toys[i].category_id);

        if (toys[i].category_id == index) {
            toysByCat.push(toys[i])
        }
    }

    res.json(toysByCat)
})

app.listen(port, () => {
    mongoose.connect('mongodb+srv://csylvainc:8HcBg1irilgXMkNG@cluster0.4dgmz.mongodb.net/?retryWrites=true&w=majority');
    console.log(`serveur lancé sur le port ${port}`)
})