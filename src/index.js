const express = require('express');
const serverCongif = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(serverCongif.PORT, () => {
    console.log(`Server is running on port ${serverCongif.PORT}`);
});



