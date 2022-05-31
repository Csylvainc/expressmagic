import express from 'express'
import { toys, categories } from "./data.js";
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send('My first API')
})
// route tous les toys route 1
app.get('/toys', (req, res) => {
    res.send(toys)
})
// route toys id route 2
app.get('/toys/:id', (req, res) => {
  let toyId = req.params['id']
  if(toys[toyId]){
    res.send(toys[toyId])
  }else{
    res.sendStatus(404)
  }
})

// route création
app.post('/toys' , (req, res) =>{
  if(req.body.name && req.body.description && req.body.price && req.body.category_id){
    res.send(req.body)
  toys.push(req.body)
  }else{
    res.sendStatus(422)
  }
})

// route modification
app.put('/toys/:id', (req, res) => {
  let toyId = req.params.id
  if(req.body.name){
    toys[toyId].name = req.body.name
  }
  if(req.body.description){
    toys[toyId].description = req.body.description
  }
  if(req.body.price){
    toys[toyId].price = req.body.price
  }
  if(req.body.category_id){
    toys[toyId].category_id = req.body.category_id
  }
  res.send(toys[toyId])
})

app.delete('/toys/:id', function (req, res){
  let toyId = req.params['id']
  res.send(toys[toyId])
  toys = toys.splice(toyId,1)
})



// route toutes les catégories
app.get('/categories', (req, res) => {
    res.send(categories)
})

// route categorie id route 2
app.get('/categories/:id', (req, res) => {
  let toyId = req.params['id']
  if(categories[toyId]){
    res.send(categories[toyId])
  }else{
    res.sendStatus(404)
  }
})

// route création
app.post('/categories' , (req, res) =>{
  if(req.body.name){
    res.send(req.body)
    categories.push(req.body)
  }else{
    res.sendStatus(422)
  }
})

// route modification
app.put('/categories/:id', (req, res) => {
  let toyId = req.params['id']
  if(req.body.name){
    categories[toyId].name = req.body.name
  }
  res.send(categories[toyId])
})

// route delete
app.delete('/categories/:id', function (req, res){
  let toyId = req.params['id']
  res.send(categories[toyId])
  categories = categories.splice(toyId,1)
})

//route toys par categories
app.get('/categories/:name/toys', (req,res) =>{
  let index 
  if(req.params['name'] == 'Videogames'){
    index = 0
  }
  if(req.params['name'] == 'Boardgames'){
    index = 1
  }
  if(req.params['name'] == 'Outdoor'){
    index = 2
  }
  //console.log(index);
   let toysByCat = []
   
  for(let i = 0 ; i<= toys.length-1; i++){
    console.log(toys[i].category_id);
    
    if(toys[i].category_id == index){
      toysByCat.push(toys[i])
    }
 }

 res.json(toysByCat)
})

app.listen(port, () => {
  console.log(`serveur lancé sur le port ${port}`)
})