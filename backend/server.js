const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/artisans', async (req, res) => {
    try {
        const query = `
        SELECT a.*, s.nom_specialite, c.nom_categorie
        FROM artisans a
        JOIN specialites s ON a.id_specialite = s.id_specialite
        JOIN categories c ON s.id_categorie = c.id_categorie 
        `;

        const [rows] = await db.query(query);
        res.json(rows);
    } catch {
        console.error("Erreur SQL :", err);
        res.status(500).json({ error: "Impossible de récupérer les artisans"});
    }
});

app.get('/api/artisans/top', async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT 
                a.*, 
                s.nom_specialite 
            FROM artisans a
            LEFT JOIN specialites s ON a.id_specialite = s.id_specialite
            WHERE a.top = 1
        `);
        
        console.log("Données avec spécialité :", rows[0]);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Erreur serveur");
    }
});

app.get('/api/artisans/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const query = `
        SELECT a.*, s.nom_specialite, c.nom_categorie
            FROM artisans a
            JOIN specialites s ON a.id_specialite = s.id_specialite
            JOIN categories c ON s.id_categorie = c.id_categorie
            WHERE a.id_artisan = ?`;

        const [rows] = await db.query(query, [id]);
        res.json(rows);
    } catch (err) {
        console.error("Erreur SQL :", err);
        res.status(500).json({ error: "Erreur serveur" });
    };

});



app.get('/api/artisans/id_specialite' , async (req,res) => {
    try {
        const [rows] = await db.query(
            `SELECT 
                a.*, 
                s.nom_specialite
            FROM specialites a
            LEFT JOIN specialites s ON  s.id_categorie`
        );
        console.log("Données avec id_catégorie et nom_specialite :", rows[0]);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Erreur serveur");
    }
});

app.get('/api/categories', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT id_categorie, nom_categorie FROM categories");
        console.log("Catégories envoyées :", rows); // Vérifie ton terminal Node
        res.json(rows);
    } catch (err) {
        console.error("Erreur SQL :", err.message);
        res.status(500).json({ error: err.message });
    }
});
app.get('/api/artisans/category/:id', async (req, res) => {
    const categoryId = req.params.id;
    
    try {
        const [rows] = await db.query(
            `SELECT a.*, s.nom_specialite, c.nom_categorie 
             FROM artisans a
             JOIN specialites s ON a.id_specialite = s.id_specialite
             JOIN categories c ON s.id_categorie = c.id_categorie
             WHERE c.id_categorie = ?`, 
            [categoryId]
        );
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarre sur http://localhost:${PORT}`);
    console.log(`test des données sur http://localhost:${PORT}/api/artisans`);
});