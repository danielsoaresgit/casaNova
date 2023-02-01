const express = require ('express');
//const ItemController = require('./controller/ItemController');
const server = express();
server.use(express.json());

/*server.get('/teste', (req,res) =>{
    res.send('API RODANDO');
});
*/

const ItemRoutes = require('./routes/ItemRoutes');
server.use('/item', ItemRoutes);

server.listen(3000, ()=>{
    console.log('API OK');
});