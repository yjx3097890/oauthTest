

import express from 'express';
import oaths from "./oaths.js";

const app = express();

app.use('/', oaths);

app.use('/', express.static('public'))


app.listen(3000);
console.log('Server is running on port 3000');
