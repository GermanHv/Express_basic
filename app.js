const express = require('express')
const app = express()
const port = 3000//local host:3000
//Esto me lo pide express aparece en la documentación


//dentro de la diagonal puedo poner la url
app.get('/', (req,res)=> {
    res.send("Hola a todosss, hola devs")
})

app.listen(port, ()=>{
    console.log("Server Listo!")
})

//Ahora puedo hacer en la terminar "  node app.js  " y debe aparecer "Server Listo!"

// en el navegador pongo "localhost:3000"