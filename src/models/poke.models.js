import mongoose from "mongoose";

const pokeCollection = 'pokemons'

const pokeSchema = new mongoose.Schema({
    name:{
        type: String,
    unique: true    },
    tyipe:String,
    photo: String
})

const PokeModel = mongoose.model (pokeCollection, pokeSchema)

export default PokeModel