const express = require('express'),
    router = express.Router();

router.get('/:name?/:year?', (req, res) => {
    console.log('url parameters are: ', req.params);
    const { name } = req.params;
    const year = req.params.year;
    const age = 2020 - year;
    res
        .status(200)
        .send(`<h1> Hello ${name}! You are ${age} years old!</h1>`)

        .end();
})

module.exports = router;