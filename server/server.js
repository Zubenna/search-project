const express = require('express')
const routes = require('./routes/apiRoutes');
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config('.env')


const app = express()

const corsOptions = {
 origin: '*',
 optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', routes);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server started ${PORT}`)
})