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
});
app.get('/api/bags/:id', (req, res) => {

    const bag = bagdata.bag.find((x) => x._id === req.params.id);
    if (bag) {
      
      res.send(bag);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
  app.get('/api/Gng/:id', (req, res) => {
    const gng = gngdata.gng.find((x) => x._id === req.params.id);
    if (gng) {
      res.send(gng);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
  app.get('/api/bucket/:id', (req, res) => {
    const bucket = bucketdata.bucket.find((x) => x._id === req.params.id);
    if (bucket) {
      res.send(bucket);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
  app.get('/api/oneg/:id', (req, res) => {
    const oneg = onegdata.oneg.find((x) => x._id === req.params.id);
    if (oneg) {
      res.send(oneg);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
  app.get('/api/threeg/:id', (req, res) => {
    const threeg = threegdata.threeg.find((x) => x._id === req.params.id);
    if (threeg) {
      res.send(threeg);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
  app.get('/api/sportstin/:id', (req, res) => {
    const sportstin = sportstindata.sportstin.find((x) => x._id === req.params.id);
    if (sportstin) {
      res.send(sportstin);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
  app.get('/api/twog/:id', (req, res) => {
    const twog = twogdata.twog.find((x) => x._id === req.params.id);
    if (twog) {
      res.send(twog);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
  app.get('/api/mixesbags/:id', (req, res) => {
    const mixes = mixesdata.mixes.find((x) => x._id === req.params.id);
    if (mixes) {
      res.send(mixes);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });
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