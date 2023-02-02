import express from "express";
import cors from 'cors'
import userRoutes from './Routes/userRoutes.js'

const app = express();

app.use(cors())
app.use(express.json())

app.use('/user', userRoutes)

const PORT = 8000;

app.listen(PORT, () => { console.log("server is up and running") })
