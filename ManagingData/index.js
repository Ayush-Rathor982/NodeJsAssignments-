const express = require('express');
const studentRoutes = require('./routes/studentRoutes') 

const db = require('./utils/db-connection');

const app = express();


app.use(express.json())



app.get('/', (req, res) => {
     res.send('Hello World!');
});


app.use('/students',studentRoutes);

app.listen(3000, () => {
     console.log('Server is running on port 3000');
})