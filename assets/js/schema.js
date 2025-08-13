// Inject JSON-LD structured data dynamically
const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CICRAL Ecuador",
    "url": "https://cicral-ecu.com",
    "logo": "https://cicral-ecu.com/assets/images/Logo-CICRAL-Rojo-300x262.png",
    "sameAs": [
      "https://www.instagram.com/ecu.cicral/",
      "https://www.linkedin.com/in/centro-de-integracion-y-cooperacion-de-rusia-y-am%C3%A9rica-latina-5931332a9"
    ]
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
  