require('dotenv/config');
let express = require('express');

let app = express();
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use("/users", require('./routers/users-router'));



app.listen(process.env.PORT, () => {
     console.log(`Server running on PORT ${process.env.PORT} `)
})