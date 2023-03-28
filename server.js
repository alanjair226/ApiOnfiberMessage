const express = require('express');
const axios = require('axios');
const app = express();

app.get('/saludo', (req, res) => {
  const saludo = saludarSegunHora();

  axios.post('https://api.chatapi.net/v2/contact/id:68116723/message', {
    message: {
      type: 'text',
      text: saludo,
    }
  }, {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQ2OCwic3BhY2VJZCI6NDg5NDUsIm9yZ0lkIjo4MDcyLCJ0eXBlIjoiYXBpIiwiaWF0IjoxNjc5ODU2NDc5fQ.woKrY-cCv3csGyHdzJB_xZ2kT4rhEljYZVkwVKt6S0Y',
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    console.log(response.data);
    res.send(`Mensaje enviado: ${saludo}`);
  })
  .catch(error => {
    console.error(error);
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  });
});

function saludarSegunHora() {
  const hora = new Date().getHours();
  let saludo;

  if (hora >= 5 && hora < 12) {
    saludo = "Buenos días";
  } else if (hora >= 12 && hora < 20) {
    saludo = "Buenas tardes";
  } else {
    saludo = "Buenas noches";
  }

  return saludo;
}

const listener = app.listen(process.env.PORT, () => {
  console.log('API en ejecución en el puerto ' + listener.address().port);
});