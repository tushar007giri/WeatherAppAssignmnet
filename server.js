const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');


const getWeatherRoutes=require('./routes/getWeather');

const app=express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());


app.use('/',getWeatherRoutes);



const PORT=process.env.PORT||3000;
app.listen(PORT,(req,res)=>{
    console.log("Server running at "+PORT);
})


