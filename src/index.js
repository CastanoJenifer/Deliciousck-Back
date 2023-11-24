const express = require('express');
const app = express();
require('dotenv').config();



app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
