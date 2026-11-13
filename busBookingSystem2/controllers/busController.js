const db = require('../utils/db-connection')

const getBus = (req,res) => {

    const {seats} = req.params

    const findQuery = `select * from Buses where availableSeats > ?`

    db.execute(findQuery,[seats],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            return
        }

        if(result.length===0){
            res.status(404).send("Bus not found");
            return ;
        }

        console.log(result)

        res.status(200).send(result);
    })
}



const addBus = (req,res) => {

    const {busNumber, totalSeats, availableSeats} = req.body

    console.log("data :",busNumber, totalSeats, availableSeats)

    const insertQuery = `insert into Buses(busNumber, totalSeats, availableSeats) values(?,?,?)`

    db.execute(insertQuery,[busNumber, totalSeats, availableSeats],(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            return
        }

        if(result.affectedRows===0){
            res.status(404).send("Bus not found");
            return ;
        }


        res.status(200).send(result);
    })
}


module.exports = {
    getBus,
    addBus
}