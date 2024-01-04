const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('If you are trying to get a good pokemon for a raid please use the /:pokemonName route');
});

router.get('/:pokemonName', (req, res) => {
    const pokemonName = req.params.pokemonName;

    const pokemon = require(`../pokemon/${pokemonName}.json`);
    if(pokemon){
        res.json(pokemon);
    }
    else{
        res.status(404).send('pokemon not found '+pokemonName);
    }
    

    /*
    Clefable
Ninetales
Poliwrath
Golem
Snorlax
Politoed
Quagsire
Ludicolo
Shiftry
Crawdaunt
Milotic
Ambipom
Yanmega
Gliscor
Mamoswine
Dusknoir
Conkeldurr
Leavanny
Chandelure
Mienshao
Mandibuzz
Trevenant
Kommo-o
Morpeko
Basculegion
Sinistcha
*/
})

module.exports=router;