const express = require("express");
const axios = require("axios");
const app = express();

app.get("/saludo/:id/:token", (req, res) => {
  const id = req.params.id;
  const token = req.params.token;
  const saludo = saludarSegunHora();

  axios
    .post(
      `https://api.chatapi.net/v2/contact/id:${id}/message`,
      {
        message: {
          type: "text",
          text: saludo,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      res.send(`Mensaje enviado: ${saludo}`);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Error al enviar el mensaje" });
    });
});

function saludarSegunHora() {
  const options = { timeZone: "America/Mexico_City", hour: "numeric" };
  const hora = new Date().toLocaleString("es-MX", options);
  let saludo;

  if (hora >= 5 && hora < 12) {
    saludo = obtenerBuenosDiasAleatorio();;
  } else if (hora >= 12 && hora < 20) {
    saludo = obtenerBuenasTardesAleatorio();
  } else {
    saludo = obtenerBuenasNochesAleatorio();
  }

  return saludo;
}

const listener = app.listen(process.env.PORT, () => {
  console.log("API en ejecución en el puerto " + listener.address().port);
});

function obtenerBuenosDiasAleatorio() {
  const buenosDias = [
    "¡Buenos días! ¿Cómo puedo ayudarte hoy?",
    "Hola, ¿en qué puedo asistirte esta mañana?",
    "Buenos días, ¿en qué puedo colaborar contigo hoy?",
    "¡Buenos días! ¿Qué puedo hacer por ti hoy?",
    "Hola, ¿cómo estás? ¿En qué puedo ayudarte hoy?",
    "Buenos días, ¿necesitas ayuda con algo en particular hoy?",
    "Hola, bienvenido/a. ¿En qué puedo ayudarte esta mañana?",
    "¡Buen día! ¿Cómo puedo asistirte hoy?",
    "Hola, espero que tengas un excelente día. ¿Qué puedo hacer por ti hoy?",
    "Buenos días, ¿en qué puedo colaborar contigo esta mañana?",
    "¡Hola! ¿Qué puedo hacer para ayudarte hoy?",
    "¡Feliz día! ¿En qué puedo ayudarte hoy?",
    "Buenos días, ¿cómo estás? ¿Necesitas ayuda con algo en particular?",
    "Hola, ¿en qué puedo asistirte hoy?",
    "¡Buenos días! ¿En qué puedo colaborar contigo hoy?",
    "Hola, bienvenido/a. ¿En qué puedo ayudarte esta mañana?",
    "Buenos días, ¿en qué puedo hacer tu día más fácil hoy?",
    "¡Hola! ¿Necesitas ayuda con algo en particular esta mañana?",
    "Buenos días, ¿qué puedo hacer para ayudarte hoy?",
    "Hola, ¿en qué puedo colaborar contigo hoy?",
    "¡Feliz inicio de día! ¿En qué puedo asistirte hoy?",
    "Buenos días, ¿cómo estás hoy? ¿Necesitas ayuda con algo en particular?",
    "Hola, ¿en qué puedo hacer tu día más productivo hoy?",
    "¡Buenos días! ¿En qué puedo hacer tu día más fácil hoy?",
    "Hola, bienvenido/a. ¿Necesitas ayuda con algo en particular?",
    "Buenos días, ¿cómo puedo hacer tu día más agradable hoy?",
    "¡Hola! ¿Qué puedo hacer para ayudarte a empezar el día?",
    "Buenos días, ¿en qué puedo colaborar contigo esta mañana?",
    "Hola, ¿necesitas ayuda con algo en particular hoy? Estoy aquí para ayudarte.",
    "Buenos días, ¿en qué puedo hacer por ti hoy?"
  ];

  const randomIndex = Math.floor(Math.random() * buenosDias.length);
  return buenosDias[randomIndex];
}

function obtenerBuenasTardesAleatorio() {
  const buenasTardes = [
    "¡Buenas tardes! ¿En qué puedo ayudarte hoy?",
    "Hola, ¿cómo estás? ¿En qué puedo asistirte esta tarde?",
    "Buenas tardes, ¿necesitas ayuda con algo en particular hoy?",
    "¡Hola! ¿Qué puedo hacer por ti esta tarde?",
    "Hola, ¿en qué puedo colaborar contigo hoy?",
    "Buenas tardes, ¿en qué puedo colaborar contigo hoy?",
    "Hola, bienvenido/a. ¿En qué puedo ayudarte esta tarde?",
    "¡Buen día! ¿Cómo puedo asistirte hoy?",
    "Hola, espero que estés teniendo una buena tarde. ¿Qué puedo hacer por ti hoy?",
    "Buenas tardes, ¿en qué puedo colaborar contigo hoy?",
    "¡Hola! ¿Qué puedo hacer para ayudarte esta tarde?",
    "¡Feliz tarde! ¿En qué puedo ayudarte hoy?",
    "Buenas tardes, ¿cómo estás? ¿Necesitas ayuda con algo en particular?",
    "Hola, ¿en qué puedo asistirte esta tarde?",
    "¡Buenas tardes! ¿En qué puedo colaborar contigo hoy?",
    "Hola, bienvenido/a. ¿En qué puedo ayudarte esta tarde?",
    "Buenas tardes, ¿en qué puedo hacer tu día más fácil hoy?",
    "¡Hola! ¿Necesitas ayuda con algo en particular esta tarde?",
    "Buenas tardes, ¿qué puedo hacer para ayudarte hoy?",
    "Hola, ¿en qué puedo colaborar contigo esta tarde?",
    "¡Feliz tarde! ¿En qué puedo asistirte hoy?",
    "Buenas tardes, ¿cómo estás hoy? ¿Necesitas ayuda con algo en particular?",
    "Hola, ¿en qué puedo hacer tu tarde más productiva hoy?",
    "¡Buenas tardes! ¿En qué puedo hacer tu día más fácil hoy?",
    "Hola, bienvenido/a. ¿Necesitas ayuda con algo en particular?",
    "Buenas tardes, ¿cómo puedo hacer tu tarde más agradable hoy?",
    "¡Hola! ¿Qué puedo hacer para ayudarte a terminar el día?",
    "Buenas tardes, ¿en qué puedo colaborar contigo esta tarde?",
    "Hola, ¿necesitas ayuda con algo en particular hoy? Estoy aquí para ayudarte.",
    "Buenas tardes, ¿en qué puedo hacer por ti hoy?"
  ];

  const randomIndex = Math.floor(Math.random() * buenasTardes.length);
  return buenasTardes[randomIndex];
}
function obtenerBuenasNochesAleatorio() {
  const buenasNoches = [
    "¡Buenas noches! Que tengas un descanso reparador.",
    "Buenas noches, espero que tengas dulces sueños.",
    "¡Hasta mañana! Que tengas una noche relajante.",
    "Buenas noches, que descanses bien.",
    "Que tengas una noche tranquila y relajante.",
    "¡Buenas noches! Que tengas un descanso merecido.",
    "Hasta mañana, que descanses bien esta noche.",
    "Buenas noches, que tengas un sueño reparador.",
    "Que tengas una noche pacífica y agradable.",
    "¡Hasta pronto! Que tengas una noche de descanso y relajación.",
    "Buenas noches, que tengas un sueño reparador y agradable.",
    "Que tengas una noche de descanso profundo y reparador.",
    "Buenas noches, que disfrutes de un sueño tranquilo y agradable.",
    "Que tengas una noche de descanso y relajación total.",
    "Buenas noches, que tengas una noche de sueño profundo y reparador.",
    "Que tengas una noche de descanso y paz interior.",
    "Buenas noches, que tengas un sueño reparador y lleno de paz.",
    "Que tengas una noche de descanso y sueños agradables.",
    "Buenas noches, que tengas una noche tranquila y relajante.",
    "Que tengas una noche de sueño reparador y restaurador.",
    "Buenas noches, que tengas una noche de sueño profundo y revitalizante.",
    "Que tengas una noche de descanso y renovación.",
    "Buenas noches, que tengas un descanso reparador y revitalizante.",
    "Que tengas una noche de sueño profundo y restaurador.",
    "Buenas noches, que tengas una noche de descanso profundo y renovador.",
    "Que tengas una noche de descanso y serenidad."
  ];

  const randomIndex = Math.floor(Math.random() * buenasNoches.length);
  return buenasNoches[randomIndex];
}