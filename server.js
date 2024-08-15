const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connexion à la base de données
connectDB();

// Middleware pour parser les données JSON
app.use(express.json({ extended: false }));

// Définir les routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/resources', require('./routes/resources'));

// Port d'écoute
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
