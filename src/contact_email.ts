const email = "joshua_josafath@hotmail.com";
const subject = "Oferta de trabajo para Desarrollador Web";
const body = "Hola Joshua Ramos," +
            "\n\n" +
            "Me gustaría contactarte para ofrecerte una posición como [Puesto/Posición] en nuestra empresa [Nombre de la Empresa]." +
            "Creemos que tus habilidades y experiencia como desarrollador web encajan perfectamente con lo que estamos buscando." +
            "\n\n" +
            "Por favor, háznos saber si estás interesado y si podemos agendar una reunión para discutir más detalles." +
            "\n\n" +
            "Saludos cordiales," +
            "\n\n" +
            "[Tu Nombre]" +
            "\n[Tu Cargo]" +
            "\n[Nombre de la Empresa]" +
            "\n[Teléfono de Contacto]";

const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
document.getElementById('contact_email').setAttribute('href', mailtoLink);