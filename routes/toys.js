import express from 'express'
import {toys} from "../data.js";
const routerToys = express.Router()

    // route tous les toys route 1
    routerToys.get('/', (req, res) => {
        res.send(toys)
    })
    // route toys id route 2
    routerToys.get('/:id', (req, res) => {
        let toyId = req.params['id']
        if (toys[toyId]) {
            res.send(toys[toyId])
        } else {
            res.sendStatus(404)
        }
    })

    // route création
    routerToys.post('/', (req, res) => {
        if (req.body.name && req.body.description && req.body.price && req.body.category_id) {
            res.send(req.body)
            toys.push(req.body)
        } else {
            res.sendStatus(422)
        }
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