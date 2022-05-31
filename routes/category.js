import express from 'express'

const routerCat = express.Router()
import {categories} from "../data.js";
    // route toutes les catégories
    routerCat.get('/', (req, res) => {
        res.send(categories)
    })

    // route categorie id route 2
    routerCat.get('/:id', (req, res) => {
        let toyId = req.params['id']
        if (categories[toyId]) {
            res.send(categories[toyId])
        } else {
            res.sendStatus(404)
        }
    })

    // route création
    routerCat.post('/', (req, res) => {
        if (req.body.name) {
            res.send(req.body)
            categories.push(req.body)
        } else {
            res.sendStatus(422)
        }
    })

    // route modification
    routerCat.put('/:id', (req, res) => {
        let toyId = req.params['id']
        if (req.body.name) {
            categories[toyId].name = req.body.name
        }
        res.send(categories[toyId])
    })

    // route delete
    routerCat.delete('/:id', function (req, res) {
        let toyId = req.params['id']
        res.send(categories[toyId])
        categories = categories.splice(toyId, 1)
    })
export default routerCat