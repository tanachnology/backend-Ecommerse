import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'

const app = express()


app.set('pkg', pkg)

app.use(express.json());
app.use(morgan('dev'))

app.get("/",(req, res) => {
    res.json({
        name:app.get('pkg').name,
        author:app.get('pkg').author,
        descripcion:app.get('pkg').name,
        version:app.get('pkg').version
    })
})

app.use('/api/products',productsRoutes)
app.use('/api/auth',authRoutes)

export default app

