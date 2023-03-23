import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.offerings);
})

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(5100, () => {
    console.log('Server at http://localhost:5100');
});