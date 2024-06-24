const express = require('express');
const {PORT}=require('./config/serverConfig');

const {configRoutes}=require('./routes/pingRoutes');
const pingRoutes=require('./routes/pingRoutes');

const app = express();
app.use('/api/v1/ping',pingRoutes);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});


