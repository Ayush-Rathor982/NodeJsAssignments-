const db = require('../utils/db-connection')
const { Op } = require('sequelize');

const Buses = require('../models/Buses')

const getBus = async (req,res) => {

    try {

        const {seats} = req.params

        const buses = await Buses.findAll({
            where:{
                availableSeats :{
                    [Op.gt] : seats
                }
            }
        });

        if(buses.length===0){
            return res.status(404).send("no bus found")
        }


        return res.status(200).send(buses)

        
    } catch (error) {
        res.status(500).send("unable to find Bus")
    }

    

    // const findQuery = `select * from Buses where availableSeats > ?`

    // db.execute(findQuery,[seats],(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message);
    //         return
    //     }

    //     if(result.length===0){
    //         res.status(404).send("Bus not found");
    //         return ;
    //     }

    //     console.log(result)

    //     res.status(200).send(result);
    // })
}



const addBus = async (req,res) => {

    try {
        const {busNumber, totalSeats, availableSeats} = req.body

        console.log("data :",busNumber, totalSeats, availableSeats)

        const bus = await Buses.create({
            busNumber : busNumber,
            totalSeats : totalSeats,
            availableSeats : availableSeats
        })

        res.status(200).send('Bus added successfully: ',bus);
    } catch (error) {
        res.status(500).send(error.message);
    }



    // const insertQuery = `insert into Buses(busNumber, totalSeats, availableSeats) values(?,?,?)`

    // db.execute(insertQuery,[busNumber, totalSeats, availableSeats],(err,result)=>{
    //     if(err){
    //         console.log(err);
    //         res.status(500).send(err.message);
    //         return
    //     }

    //     if(result.affectedRows===0){
    //         res.status(404).send("Bus not found");
    //         return ;
    //     }


    //     res.status(200).send(result);
    // })
}


module.exports = {
    getBus,
    addBus
}