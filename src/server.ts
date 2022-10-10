import express from 'express'
import { router } from './routes/match.route'

const app = express()
app.use(express.json())
app.use(router)


app.listen(3333, ()=>{
    console.log("http://localhost:3333")
})