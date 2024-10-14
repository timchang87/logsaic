import express, { Request, Response } from 'express';
// import https from 'https';
// import * as path from 'path';
// import fs from 'fs';
// import { __dirname } from './utils/utils.js';
const app = express();

// const options = {
//   key: fs.readFileSync(path.resolve(__dirname, '../../ssl/server.key')),
//   cert: fs.readFileSync(path.resolve(__dirname, '../../ssl/server.crt')),
// };

app.get('/', (req: Request, res: Response) => {
  res.send('this is a test 3');
});

app.get('/test', (req: Request, res: Response) => {
  res.send('this is a test 3');
});
// const server = https.createServer(options, app);

app.listen(5000, () => {
  console.log('Server is running on 5000');
});
