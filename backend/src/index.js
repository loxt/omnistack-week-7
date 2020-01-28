import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import http from 'http';
import routes from './routes';
import { setupWebSocket } from './websocket';

const app = express();
const server = http.Server(app);
setupWebSocket(server);

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-v8pzm.gcp.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(cors());
app.use(routes);
server.listen(3333);
