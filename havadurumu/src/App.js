import React, { useState } from "react";
import "./index.css";
import Arkaplan from "./Bilesenler/Arkaplan";
import Arama from "./Bilesenler/Arama/AramaCubugu";
import Sonuc from "./Bilesenler/Sonuc";

function App() {
  const [havaDurumu, belirtHavaDurumu] = useState ({});

  return (
    <section className="uygulama">
      <Arkaplan arkaplan={havaDurumu.weather && havaDurumu.weather[0].main} />
       <div id="baslik">Hava Durumu</div>
       <link href="https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap" rel="stylesheet"></link>
       <Arama belirtHavaDurumu={belirtHavaDurumu}/>
       <link href="https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap" rel="stylesheet"></link>
       <Sonuc hava={havaDurumu}/>
       <link href="https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap" rel="stylesheet"></link>
       
    </section>
  );
}

export default App;
