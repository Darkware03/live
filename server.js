const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Servir los archivos de video (stream.m3u8 y los .ts)
app.use('/videos', express.static(path.join(__dirname, 'videos')));

// Variable para almacenar el tiempo actual del video
let currentVideoTime = 0;

// Endpoint para obtener el tiempo actual de reproducción
app.get('/currentTime', (req, res) => {
    res.json({ currentTime: currentVideoTime });
});

// Actualizar el tiempo actual del video (simulación)
setInterval(() => {
    currentVideoTime += 1; // Aumenta 1 segundo cada segundo (simulación de progreso)
}, 1000);

// Servir la página HTML con hls.js
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor en el puerto 3001
app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});
