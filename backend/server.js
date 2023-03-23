import express from 'express';
import data from './data.js';
import bagdata from './bagdata.js';
import gngdata from './gngdata.js'
import mixesdata from'./mixesdata.js';
import bucketdata from './bucketdata.js';
import onegdata from './onegdata.js';
import sportstindata from './sportstindata.js';
import twogdata from './twogdata.js';
import threegdata from './threegdata.js'
const app = express();

app.get('/api/offerings', (req, res) => {
    res.send(data.offerings);
})
app.get('/api/bags', (req, res) => {
    res.send(bagdata.bag);
})
app.get('/api/Gng', (req, res) => {
    res.send(gngdata.gng);
})
app.get('/api/mixesbags', (req, res) => {
    res.send(mixesdata.mixes);
})
app.get('/api/bucket', (req, res) => {
    res.send(bucketdata.bucket);
})
app.get('/api/oneg', (req, res) => {
    res.send(onegdata.oneg);
})
app.get('/api/sportstin', (req, res) => {
    res.send(sportstindata.sportstin);
})
app.get('/api/twog', (req, res) => {
    res.send(twogdata.twog);
})
app.get('/api/threeg', (req, res) => {
    res.send(threegdata.threeg);
})

app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 5100;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});