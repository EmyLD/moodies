const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const diaryRoutes = require('./routes/diary')

mongoose.connect('mongodb+srv://emyld:aliment35vibratos@emyld.3pgekxm.mongodb.net/moodies?retryWrites=true&w=majority&appName=Emyld')
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => console.log('Connexion à MongoDB échouée !', error));

const app = express();


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/users', userRoutes);
app.use('/api/diaries', diaryRoutes)


module.exports = app;