import React from "react";



  



// translations.js
const es = {
    title1: "Desarrollador de Software Full Stack",
    technologies1: "HTML, CSS, JavaScript, .NET Framework, ASP.NET, ADO.NET, LINQ, C#, VB, React JS, React Native, Bootstrap, Native Base, Git, Jira, SourceTree, Angular (básico), Java (básico), JSON, SQL Server, MySQL, Crystal Reports",
    text1: "Soy un desarrollador de software especializado en aplicaciones móviles, web y de escritorio. Tengo experiencia en Backend, Frontend y gestión de bases de datos. Trabajo con APIs REST y diseño web. Me apasiona aprender nuevas tecnologías y crear soluciones innovadoras que optimicen mi trabajo.",
    title2: "Desarrollador de Videojuegos Indie",
    technologies2: "Game Maker Studio 2, Unity, GML, C#, Audacity, Aseprite, Adobe Animate, Photoshop, Illustrator, Blender, LMMS, Google Play Console, Android Studio, SDK Manager, Java",
    text2: "En mi tiempo libre, soy un desarrollador de videojuegos móviles con más de 5 años de experiencia y varios juegos publicados en Google Play Store. Disfruto enormemente crear juegos para relajación, aprendizaje o simulación. Mi proyecto más ambicioso es 'Lake Fishing Demo', un juego inspirado en mi deporte favorito. Mi sueño es vivir de mis juegos y enviar un mensaje positivo a través de ellos a niños, jóvenes y adultos. Tengo muchos proyectos en mente, pero deseo crecer primeramente como desarrollador de software.",
  };
  
  const en = {
    title1: "Full Stack Software Developer",
    technologies1: "HTML, CSS, JavaScript, .NET Framework, ASP.NET, ADO.NET, LINQ, C#, VB, React JS, React Native, Bootstrap, Native Base, Git, Jira, SourceTree, Angular (basic), Java (basic), JSON, SQL Server, MySQL, Crystal Reports",
    text1: "I am a software developer specializing in mobile, web, and desktop applications. I have experience in Backend, Frontend, and database management. I work with REST APIs and web design. I am passionate about learning new technologies and creating innovative solutions that enhance my work.",
    title2: "Indie Game Developer",
    technologies2: "Game Maker Studio 2, Unity, GML, C#, Audacity, Aseprite, Adobe Animate, Photoshop, Illustrator, Blender, LMMS, Google Play Console, Android Studio, SDK Manager, Java",
    text2: "In my spare time, I am a mobile game developer with over 5 years of experience and several games published on Google Play Store. I greatly enjoy creating games for relaxation, learning, or simulation. My most ambitious project is 'Lake Fishing Demo,' a game inspired by my favorite sport. My dream is to live off my games and send a positive message through them to children, teenagers, and adults. I have many projects in mind but wish to first grow as a software developer.",
  };
  
  const getTranslations = (lang) => {
    return lang === 'en' ? en : es;
  };
  
  export default getTranslations;
  















