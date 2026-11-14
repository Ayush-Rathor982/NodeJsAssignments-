const express = require('express');
const db = require('./utils/db-connection')
const studentRoutes = require('./routes/studentRoutes')

// const studentModel = require('./models/student')

require('./models')

const app = express();

app.use(express.json());

app.use('/students',studentRoutes)


app.get('/', (req, res) => {
     res.send('Hello World!');
});


db.sync({force:true}).then(()=>{
    app.listen(3000, () => {
          console.log('Server is running on port 3000');
     })
}).catch(err => {
     console.log(err)
})
