const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const token = 'ab1e119aa0009ad6457795f39f927f27d17a645e4d45b73a17fcda0861392c1b'; 

app.get('/api/tipo-cambio', async (req, res) => {
  const { startDate, endDate } = req.query;

  try {
    const response = await axios.get(
      `https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF43718/datos/${startDate}/${endDate}`,
      {
        headers: {
          'Bmx-Token': token,
        },
      }
    );
    res.json(response.data.bmx.series[0].datos); // Enviar los datos al frontend
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});