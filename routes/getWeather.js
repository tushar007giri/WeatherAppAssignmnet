const express=require('express');
const router = express.Router()
const constant=require('../config');
const request=require('request');
const bodyParser=require('body-parser');


router.post('/' , (req , res)=>{
    res.send("Hi from HomePage")
    console.log(req.body.cityName);
})


router.post('/get-weather',async(req , res)=>{


    console.log(req.body.cityName)
    let API_URL=`http://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${constant.API_KEY}&units=metric`;

    request(API_URL,async(err,response,body)=>{
        if(err )
        {
            return res.json({
                err:"Cannot Get weather details"
            })
        }
        else{
            let weatherData=await JSON.parse(body);
            if(weatherData.cod!=404)
            {
                return res.json({
                    data:weatherData
                })
            }
            else{
                return res.status(400).json({err:"Invlaid city entered"})
            }
           
        }
    })

})

module.exports  = router;
