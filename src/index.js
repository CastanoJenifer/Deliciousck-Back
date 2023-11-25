const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const router = require('./routes/task.routes.js');

app.use(express.json());

app.use(cors());
app.use(router);

app.use(express.static('src/files_Publics'));

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
