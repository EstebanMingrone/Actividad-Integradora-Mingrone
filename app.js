//Imports
import express from "express";
import handlebars from 'express-handlebars'
import productRouter from './routes/productRouter.js'
import viewsRouter from './routes/viewsRouter.js'
import __dirname from "./utils/constantUtils.js";
import mongoose from "mongoose";

const uri = 'mongodb://localhost:27017/integracion'
mongoose.connect(uri)

const app = express();

//Handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/../views');
app.set('view engine', 'handlebars');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//Router
app.use('/api/product', productRouter)
app.use('/products', viewsRouter)


const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Servidor iniciado en PORT ${PORT}`)
})
