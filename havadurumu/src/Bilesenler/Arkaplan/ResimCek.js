import yagmurlu from "../../Resimler/yagmurlu.jpg";
import acik from "../../Resimler/acik.jpg";
import bulutlu from "../../Resimler/bulutlu.jpg";
import firtinali from "../../Resimler/firtinali.jpg";
import kapali from "../../Resimler/kapali.jpg";
import parcalibulutlu from "../../Resimler/parcalibulutlu.jpg";
import simsekli from "../../Resimler/simsekli.jpg";
import {useEffect} from 'react';

function ResimCek ({durum}) {

    switch (durum) {
        case "Rain":
           return <img className="arkaplan-resim" src={yagmurlu} alt="yagmurlu"  width="100px" height="100px"/>;
        case "Clear":
           return <img className="arkaplan-resim" src={acik} alt="acik" width="100px" height="100px" />;
        case "Clouds":
           return <img className="arkaplan-resim" src={bulutlu} alt="bulutlu" width="100px" height="100px"/>;
        case "Storm":
           return <img className="arkaplan-resim" src={firtinali} alt="firtinali" width="100px" height="100px"/>;
        case "Mist":
           return <img className="arkaplan-resim" src={kapali} alt="kapali" width="100px" height="100px"/>;
        case "Drizzle":
           return <img className="arkaplan-resim" src={parcalibulutlu} alt="parcalibulutlu" width="100px" height="100px"/>;
        case "Thunderstorm":
           return <img className="arkaplan-resim" src={simsekli} alt="simsekli" width="100px" height="100px"/>;
        default:
           return <img className="arkaplan-resim" src={simsekli} alt="simsekli" width="100px" height="100px"/>;
    }
}

export default ResimCek;