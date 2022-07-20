const express = require('express');
const app = express();
const port = 3002;

// import { stuff } from './stuff'
import { something } from './helpers/index';

app.get('/', (req: any, res: any) => {
  res.send(something('running...'));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// needed to get file recognized as a module
export {};
