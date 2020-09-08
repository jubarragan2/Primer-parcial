const express = require ('express');
const appServer = express();
appServer.use(express.json());

var listajuegos= [] ;

appServer.listen(3000, () =>{
    console.log('listen on port 3000');

});
appServer.get ('/mygame',
    (req, res) => {
        res.json (myGame);

    }
);
appServer.post('/agregarjuego',(req,res)=>{
    listajuegos.push(req.body);
    res.send("Juego agregado")
});
appServer.post('/listajuegos',(req,res)=>{
    res.json (listajuegos);
});


