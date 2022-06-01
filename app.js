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

// connection à la bdd mongodb
main().catch(err => log.error(err))
async function main() {
    await mongoose.connect('mongodb+srv://csylvainc:8HcBg1irilgXMkNG@cluster0.4dgmz.mongodb.net/?retryWrites=true&w=majority');
    console.log("connection réussi");

}

// creation de shema
const toysSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
});

// création d'une méthode
toysSchema.methods.speak = function speak() {
    const greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
};

// création de model
export const Toy = mongoose.model('toy', toysSchema);



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
    console.log(`serveur lancé sur le port ${port}`)
})
