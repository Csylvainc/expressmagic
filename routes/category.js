import express from 'express'
import { showOneCat, listCategory, createCategory} from '../controller/category.js';
const routerCat = express.Router()
routerCat.use(express.json())
routerCat.use(express.urlencoded({ extended: true }))


    // route toutes les catégories
    routerCat.get('/', async (req, res) => {
        let categorys = await listCategory()
        res.json(categorys);
    })

    // route categorie id route 2
    routerCat.get('/:name', async (req, res) => {
        let catName = await showOneCat(req.params.name)
        res.json(catName)
    })

    // route création
    routerCat.post('/', async (req, res) => {
        const newCat = await createCategory(req.body)
        res.send('ok')
    })

    // route modification
    routerCat.put('/:name', async (req, res) => {
        console.log(req.params.name);
        let updateCat = await Category.findOneAndUpdate(req.params.name,
            {name : req.body.name}).exec((err,data)=>{
                if(err){
                    res.send(err)
                }else{
                    res.send(`la categorie ${req.params.name}  est mise à jour\n nouveau nom ${req.body.name}\n`)
                }
            });
    })

    // route delete
    routerCat.delete('/:id', function (req, res) {
        Category.deleteOne({name:req.params.name})
        .then(() => console.log("Catégorie supprimée"))
        .catch(err => console.log("Erreur : Catégorie non supprimée"))
    })
export default routerCat