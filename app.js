const express = require('express');
const bodyParser = require('body-parser');
//Le package  body-parser rend les données du corps de la requête exploitable

const mongoose = require('mongoose'); //sert à créer un modèle de données afin de faciliter les opérations de la bdd 
const path = require('path');
//const Thing = require('./models/Thing');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://Hermann:Angola10@cluster0.6qejx.mongodb.net/vente_bdd?retryWrites=true&w=majority',
    { useNewUrlParser: true,
      useUnifiedTopology: true})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB !'));

const app = express();

//Middleware fonction dans une application express qui recoit une req et res qui peut ensuite passer une requete a une prochaine fonction

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();

    //Pour empêcher des erreurs CORS, il faut configurer des headers spécifiques sur l'objet réponse. On déclare les entêtes ci-dessus pour eviter les erreurs de type CORS.
    //Une erreur CORS peut survenir quand le serveur et le client ne partagent pas la même origine.
    //La fonction  next() passe l'exécution au prochain middleware de la chaîne

});  

  app.use(bodyParser.json());
  app.use('/images', express.static(path.join(__dirname, 'images')));
  app.use('/api/stuff', stuffRoutes);
  app.use('/api/auth', userRoutes);

  //transforme le corps de la requete en objet JS utilisable


  /*Dans une application Express, que doit faire le dernier middleware pour une route donnée pour empêcher les requêtes d'expirer ?
  Renvoyer la réponse au client
  */
module.exports = app;