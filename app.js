import http from 'http';
import express from 'express';

let app = express();

app.use('/', (req, res) => {
    res.send("test server editted!!!");
})

let httpServer = http.createServer(app);

httpServer.listen(8443, () => {
    console.log('Kurento Group Call started');
    console.log('listening on *:', 8443);
});