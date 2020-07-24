const express = require('express');
const app = express();
const port = process.env.PORT || 3000
let allProviders = require('./data/seed-data').providers;

// re-examine cors usage in production
let cors = require('cors');
app.use(cors({
    'allowedHeaders': ['Content-Type'],
    'origin': '*',
    'preflightContinue': true
}));

app.get('/providers', (req, res) => {
    // if (req.params.id) {
    //     return res.json(allProviders.providers[req.params.id]);
    // } else {
    let name = req.query.name;
    let zone = req.query.zone;
    let type = req.query.type;

    let providers = allProviders.filter(function (item) {
        for (let key in req.query) {
            if (key == 'zone') {
                if (item[key] === undefined || item[key] != req.query[key])
                    return false;
            } else {
                if (item[key] === undefined || !item[key].toLowerCase().includes(req.query[key].toLowerCase()))
                    return false;
            }
        }
        return true;
    });

    // providers = allProviders.filter(function (item) {
    //     return item.population > 3000000;
    // });
    // console.dir(providers);
    // }
    return res.json(providers);
});

app.post('/providers', (req, res) => {
    return res.send('Unimplmimented, sorry pal.');
});

app.put('/providers', (req, res) => {
    return res.send('Unimplmimented, sorry pal.');
});

app.delete('/providers', (req, res) => {
    return res.send('Unimplmimented, sorry pal.');
});

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
);