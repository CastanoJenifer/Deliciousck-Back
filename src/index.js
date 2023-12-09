require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/task.routes.js');


app.use(express.json());
app.use(cors());
app.use(router.router);
app.use('/recetas', router.routerReceps);
app.use(express.static('src/files_Publics'));



app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
