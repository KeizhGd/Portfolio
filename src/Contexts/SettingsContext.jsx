import React, { Children, createContext, useEffect, useState } from "react";

const SettingsContext = createContext();
export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedLanguage = localStorage.getItem("languaje");

    if (savedLanguage) setTheme(savedTheme); ///Si al cargar el tema se asigna el tema a theme
    if (savedLanguage) setLanguage(savedLanguage); ///Lo mismo pero con el lenguaje
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"; /// Expresión ternaria

    setTheme(newTheme); /// Establezco el nuevo tema
    localStorage.setItem("theme", newTheme); ///guardo el Tema en  el local storage
  };

  const changeLanguage = (lang) => {
    /// Cambia el lenguaje
    setLanguage(lang);
    localStorage.setItem("languaje", lang);
  };

  return (
    <SettingsContext.Provider
      value={{ theme, toggleTheme, language, changeLanguage }}>
      {children}
    </SettingsContext.Provider>
  );
};



export default SettingsContext;