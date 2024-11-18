import React, { useEffect, useState, useContext, Component } from "react";
import SettingsContext, { SettingsProvider } from "../Contexts/SettingsContext";
import getTranslations from "../Translations/Translation";
import Photo from "../Assets/Kendall Guido.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import CenterMode from "../Components/CenterMode";
import getProjects from "../Projects/Software/Projects";

export default function Master() {
  const { theme, toggleTheme, language, changeLanguage } =
    useContext(SettingsContext);

  const [devText, setDevtext] = useState([]);
  const [projects, setProjects] = useState([]);

  const options = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  const handleLanguage = () => {
    if (language === "en") {
      changeLanguage("es");
    } else {
      changeLanguage("en");
    }
  };

  useEffect(() => {
    const trans = getTranslations(language);
    setDevtext(trans);

    const proj = getProjects();
    console.log("Estos son los Proyectos ", proj);
    setProjects(proj);
  }, []);

  useEffect(() => {
    const trans = getTranslations(language);
    setDevtext(trans);
  }, [language]);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "550px",
          zIndex: -1, 
          overflow: "hidden",
        }}
      >
        <iframe
          src="/CodeRain/index.html"
          title="Canvas"
          style={{
            width: "100%",
            height: "2000px",
            border: "none",
            display: "block",
          }}
        />
      </div>
      <div className=" m-0  p-5 ">
        <img src={Photo} alt="Kendall Guido "></img>
        <h1 className="text-light pb-4"> Kendall Jefferson Guido Cruz</h1>
        <button className="btn btn-light" onClick={() => handleLanguage()}>
          {language === "en" ? "en" : "es"}
        </button>
      </div>
      <div className="mx-auto  justify-content-center  border rounded p-4 col-8  bg-white">
        <div className=" mt-4">
          <h3>{devText?.title1}</h3>
          <h5>{devText?.technologies1}</h5>
          <p>{devText?.text1}</p>
        </div>

        <CenterMode items={projects}></CenterMode>

        <div className=" mt-4">
          <h3>{devText?.title2}</h3>
          <h5>{devText?.technologies2}</h5>
          <p>{devText?.text2}</p>
        </div>

        <CenterMode items={projects}></CenterMode>
      </div>

      <div
        className=" py-4 d-flex justify-content-center align-items-center "
        style={{ textDecoration: "none", background: "#000" }}
      >
        <h5 className="text-light mb-0">
          <a
            href="https://www.linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            style={{ textDecoration: "none" }}
          >
            LinkedIn
          </a>
          |
          <a
            href="mailto:tu-email@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            style={{ textDecoration: "none" }}
          >
            Gmail
          </a>
          |
          <a
            href="https://www.facebook.com/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            style={{ textDecoration: "none" }}
          >
            Facebook
          </a>
          |
          <a
            href="https://wa.me/tu-numero"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            style={{ textDecoration: "none" }}
          >
            Whatsapp
          </a>
          |
          <a
            href="https://www.tiktok.com/@tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            style={{ textDecoration: "none" }}
          >
            TikTok
          </a>
          |
          <a
            href="https://play.google.com/store/apps/dev?id=tu-id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
            style={{ textDecoration: "none" }}
          >
            Google Play Store
          </a>
        </h5>
      </div>
    </div>
  );
}
