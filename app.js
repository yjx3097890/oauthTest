

import express from 'express';
import oaths from "./oaths.js";

const app = express();

app.use('/', express.static('public'))

app.use('/oaths', oaths);

app.listen(3000);
