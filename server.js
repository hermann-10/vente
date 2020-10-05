const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000)
const server = http.createServer(app);

/*
En créant un serveur HTTP avec Node, on utilise la fonction  createServer()  . On peut passer une fonction à  createServer()  qui réagira aux requêtes entrantes. Quels arguments reçoit cette fonction passée ?
L'objet requête
L'objet réponse
*/

server.listen(process.env.PORT || 3000);
