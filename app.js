const express = require("express");
const https = require("https")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
    
    const apiKey = "754d330449b541c32a48f16db420ea80"
    const cityName = req.body.cityName
    const units = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey + "&units=" + units

    https.get(url, function(response){
        console.log(response.statusCode)

        response.on("data", function(data){
            const jsonParsed = JSON.parse(data)

            
            console.log(jsonParsed.main.feels_like)
            console.log(JSON.stringify(police))

            const imageIcon = jsonParsed.weather[0].icon
             
            res.write(`<p> The weather is ${jsonParsed.weather[0].description} </p>`)
            res.write("<h1> The weather is " + jsonParsed.main.feels_like + "</h1>")
            res.send()
        })

        const police = {
            name : "Micheal",
            age: 23
        }

        
    })
})



//you can only have one send method in a get method


app.listen(3000, function(){
    console.log("Server is running on port 3000")
}) 
