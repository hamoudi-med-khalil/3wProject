import express from 'express'
import mongoose from 'mongoose'
import colors from 'colors'
import connectDB from './config/db.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'



connectDB()

const app = express()
const PORT = 5000

app.use(cors({
    origin : 'http://localhost:5173/',
    methods : ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders : [
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
    ],
    credentials: true
})
)
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: false}))






app.listen(PORT, () => console.log(`Server  started on port ${PORT}`.blue) )