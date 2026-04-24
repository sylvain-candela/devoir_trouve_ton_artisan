const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
    console.error("Erreur de connexion à la base de données :", err);
});