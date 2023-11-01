//import cors, express

const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');
require('dotenv').config();


const app = express();

//enable cors for all 
app.use(cors({ origin: '*' }));


app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const db = require('./models');

db.sequelize.sync().then(() => {
    console.log('connected db');
}).catch((err) => {
    console.log('failed to connnect');
})

//route
app.get('/', (req, res) => {
    res.json({ message: 'welcome' });
});

require('./routes/books.routes')(app);

//port config
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})




