const express = require('express')
const app = express()
const port = 3000//local host:3000
//Esto me lo pide express aparece en la documentación


//dentro de la diagonal puedo poner la url
// localhost:3000/Launchx
app.get('/Launchx', (req,res)=> {
    res.send("Hola a todosss, hola devs")
})

app.get('/node', (req,res)=>{
    const explorer1 = {id: 1, name: "Explorer"}
    const explorer2 = {id: 2, name: "Explorer"}
    const explorer3 = {id: 3, name: "Explorer"}
    res.send([explorer1, explorer2, explorer3])
})
// localhost/explorers/germanhv
app.get('/explorers/:explorer', (req,res)=>{
    console.log(req.params)
    res.send(req.params)
})


app.listen(port, ()=>{
    console.log("Server Listo!")
})

//Ahora puedo hacer en la terminar "  node app.js  " y debe aparecer "Server Listo!"

// en el navegador pongo "localhost:3000"
// si hago cambios, tengo que salir de la ejecucion de node, guardar mis archivos y volver a correr node app.js y refresh a la page