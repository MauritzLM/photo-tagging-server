const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3004;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});

