let express = require("express");
let cors = require('cors');
const parser = require('body-parser');

const apiRouter = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/v1/', apiRouter);

const PORT = 3000;

app.listen(PORT, function () {
    console.log(`App is running on port http://localhost:${PORT} !`);
});