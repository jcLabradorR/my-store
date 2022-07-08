const express = require('express')
const routerApi = require('./routes');

const app = express();
const port = 3128;

app.use(express.json());

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.get("/nueva-ruta", (req, res) =>{
  res.send("Hola soy un nuevo endpoint");
});

routerApi(app);

/*

app.get('/people', (req, res) => {
  res.json([{
      name: 'Arturo',
      type: 'employee'
  }, {
      name: 'Jimena',
      type: 'customer'
  }]);
});

app.get('/people/:id', (req, res) => {
  const { id } = req.params;
  res.json({
      id,
      name: 'Arturo',
      type: 'employee'
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
  });
  }else{
    res.send('no hay parametros');
  }
});*/


app.listen(port, () =>{
  console.log("My port: " + port);
});
