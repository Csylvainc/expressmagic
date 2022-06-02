import express from 'express'
//import {toys} from "../data.js";
const routerToys = express.Router()
routerToys.use(express.json())
routerToys.use(express.urlencoded({ extended: true }))


// route tous les toys route 1
routerToys.get('/', async (req, res) => {
    const toys = await Toy.find({})
    res.json(toys)
})

// route toys id route 2
routerToys.get('/:name', async (req, res) => {
    let toyName = req.params.name
    const myToy = await Toy.findOne({ name: toyName }).exec();
    res.json(myToy)
       
   
})

// route création
routerToys.post('/', async (req, res) => {
        let toy = req.body.name
        let newToy = await new Toy(req.body);
        newToy.save()
    
})

// route modification
routerToys.put('/:id', (req, res) => {
    let toyId = req.params.id
    if (req.body.name) {
        toys[toyId].name = req.body.name
    }
    if (req.body.description) {
        toys[toyId].description = req.body.description
    }
    if (req.body.price) {
        toys[toyId].price = req.body.price
    }
    if (req.body.category_id) {
        toys[toyId].category_id = req.body.category_id
    }
    res.send(toys[toyId])
})

routerToys.delete('/:id', function (req, res) {
    let toyId = req.params['id']
    res.send(toys[toyId])
    toys = toys.splice(toyId, 1)
})
export default routerToys