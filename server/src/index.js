const express = require('express');
const app = express();
const port = 3000;
const routes = require('./api/endPoints');
const cors = require('cors');
const { ping } = require('./models/conecction');

app.use(cors( { origin: ["http://localhost:5173"],  
                methods: ["GET", "POST"],
} ));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {  
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(" -> Server BackEnd Online");
});