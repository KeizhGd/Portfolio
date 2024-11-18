import logo from "./logo.svg";
import "./App.css";
import Master from "./Master/Master";
import SettingsContext, { SettingsProvider } from "./Contexts/SettingsContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (


    <SettingsProvider>
    <div className="App">
     
        <Master></Master>
   
    </div>
    </SettingsProvider>
  );
}

export default App;
