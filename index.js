const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3128;

app.use(express.json());

const whitelist = ['http://localhost:5000', 'http://localhost:3128', 'https://my2wapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

app.get("/", (req, res) =>{
  res.send("Bienvenido a Api My-store");
});

app.get("/nueva-ruta", (req, res) =>{
  res.send("Hola soy un nuevo endpoint");
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>{
  console.log("My port: " + port);
});
