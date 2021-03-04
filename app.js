const express = require('express');
const app = express ();
//const database = require('./database/db');
const userRoutes = require('./routes/user');
app.use(express.json());
app.use('/apirest',userRoutes);
//database ();
app.get('/', (res) => {res.send('bienvenido')});
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));