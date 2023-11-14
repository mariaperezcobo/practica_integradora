import express from 'express'
import UserModel from './models/users.model.js'
import mongoose from 'mongoose'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import pokeRouter from './routes/poke.router.js'


//inicializamos las variables
const app = express()

const mongoURL = 'mongodb+srv://mariaperezcobo:t5pFMZnlhzX5AsFQ@clustermaria.jeh0zpu.mongodb.net/'
const mongoDBName = 'calse15'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// configurar el motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')


app.get('/', (req,res)=>{
    res.render('index',{})
})

app.use('/pokemon', pokeRouter)

app.get('/health', (req,res)=> res.send('ok'))

// app.get('/api/users', async (req, res)=>{
//     const users = await UserModel.find()

// res.json({status: 'succes', payload: users})
// })

// const url = 'mongodb+srv://mariaperezcobo:t5pFMZnlhzX5AsFQ@clustermaria.jeh0zpu.mongodb.net/'

// mongoose.connect(url, {dbName: 'practica'})
// .then (()=>{
//     console.log('db conectada')
// })
// .catch (e=>{
//     console.error('error al conectar a la bd')
// })

mongoose.connect(mongoURL, {dbName: mongoDBName })
.then(()=>{
    console.log('conectado')
    app.listen(8080, console.log('conectado al servidor'))
})
.catch (e => console.error('error al conectar'))

