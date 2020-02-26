const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log('Server running on port 3333.');
});

const rootController = require('./Routers/index'),
    catController = require('./Routers/cat'),
    dogController = require('./Routers/dog'),
    personController = require('./Routers/person'),
    greetController = require('./Routers/greet'),
    fooController = require('./Routers/Foo');


app.use("/", rootController)
app.use("/dog", dogController)
app.use("/cat", catController)
app.use("/foo", fooController)
app.use("/person", personController)
app.use("/greet", greetController)

