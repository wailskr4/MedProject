import React, { useEffect } from 'react'
import "./Navstyle.css"
const Header = () => {
  useEffect(() => {
    // Charger les scripts externes après le montage du composant
    const scriptAos = document.createElement('script');
    scriptAos.src = 'https://unpkg.com/aos@next/dist/aos.js';
    scriptAos.async = true;
    document.body.appendChild(scriptAos);

    const items = [
      { selector: ".li1", timer: 550 },
      { selector: ".li2", timer: 650 },
      { selector: ".li3", timer: 750 },
      { selector: ".li4", timer: 850 }
  ];

  function loadItem(item) {
      // Sélectionne l'élément avec la classe spécifiée dans item.selector
      const element = document.querySelector(item.selector);
      if (element) {
          element.style.visibility = "visible"; // Modifie la visibilité
      }
  }

  // Applique le chargement des éléments avec un délai
  items.forEach(item => {
      setTimeout(() => {
          loadItem(item);
      }, item.timer);
  });

    const scriptElf = document.createElement('script');
    scriptElf.src = 'https://static.elfsight.com/platform/platform.js';
    scriptElf.setAttribute('data-use-service-core', '');
    scriptElf.defer = true;
    document.body.appendChild(scriptElf);

    return () => {
      // Nettoyer les scripts si nécessaire
      document.body.removeChild(scriptAos);

      document.body.removeChild(scriptElf);
    };
  }, []);

  return (
    <header>
      <nav>
        <div className="logo">
          Vita Med
        </div>
        <ul>
          <li className="li1"><a href="index.html">Home</a></li>
          <li className="li2"><a href="#Rooms">Rooms</a></li>
          <li className="li3"><a href="#About">About</a></li>
          <li className="li4"><a href="#ContactUs">ContactUs</a></li>
        </ul>
       
      </nav>
      <div className="elfsight-app-a5650f33-1ec9-42ac-ae7e-ca785c974b57" data-elfsight-app-async></div>
    </header>
  );
};

export default Header;
