import { Router } from 'express'
import PokeModel from '../models/poke.models.js'
const router = Router()

router.get('/', async (req,res)=>{
    const pokemons = await PokeModel.find().lean().exec()
    console.log({pokemons})
    res.render('list', {pokemons})
})
router.post('/', async(req,res)=>{
    try{
        const pokemonNew = req.body
        const result = await PokeModel.create(pokemonNew)
        console.log ({result})
        res.redirect('/pokemon')
    }
    catch (error){
        console.log(error)
        res.send('error al crear pokemon')

    }
})

router.get('/create', async (req,res)=>{
    res.render('create', {})
})

router.get('/:name', async (req,res)=>{
    res.render('one', {pokemons:{
        name:'Pikachu',
        type:'electric',
        photo:''
    }})
})

router.delete('/:id', (req, res) => {
    res.send('Pokemon is deleting...')
})


export default router