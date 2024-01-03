const express= require('express');
const app= express();
const port=3000;

const indexRoutes= require('./routes/index');
const pokemonRoutes = require('./routes/pokemon');
const raidRoutes = require('./routes/raids');

app.use('/',indexRoutes);
app.use('/pokemon',pokemonRoutes);
app.use('/raids',raidRoutes);


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})