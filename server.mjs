import jsonServer from 'json-server';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(cors()); 
server.use(middlewares);
server.use(router);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running with CORS enabled on http://localhost:${PORT}`);
});
