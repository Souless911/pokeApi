const express = require('express');
const router = express.Router();
const pokeTypes = require('../../pokeTypes');

router.get('/', (req, res) => {
    res.send('hello to Pokemon Assistance API');
});


router.get('/types', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(pokeTypes.types);
})

router.get('/weakness/:type', (req, res) => {
    const targetType = req.params.type;
    const weaknesses = pokeTypes.Weakness[targetType];

    if(weaknesses){
        res.json({type:targetType,Weaknesses:weaknesses});
    }
    else{
        res.status(404).send('type not found '+targetType);
    }
    
})

module.exports=router;