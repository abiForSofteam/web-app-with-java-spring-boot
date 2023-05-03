import * as React from "react";
import { useEffect } from "react";
import "./css/content.css";
import "./css/main.css"
import "./css/mediaScreen-content.css"
import "./css/progress.css"
import profilephoto from "./1554218703585.jpeg";
import WOW from "wowjs";
import * as Icon from "react-feather";

export default function Content() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });
  return (
    <div className="main-container">

      <div className="bloc-profile wow bounceInDown" data-wow-duration="3s">
        <div className="identity">
          <div className="profilephoto">
            <img src={profilephoto} alt="profilephoto" />
          </div>
          <div className="profileinfos">
            <div className="profilename">Aliyou BINATE</div>
            <div>Ingénieur Consultant</div>
            <div>Certifié DevOps Foundation</div>
            <div>abimimi67@gmail.com</div>
            <div>Tel : 06 35 59 01 60</div>
          </div>
        </div>

        <div style={{fontSize:18}} className="accroche">
          Administrateur Système - Automatisation - Développeur Full Stack
        </div>
        <h1 style={{fontSize:22,marginTop:55}} className="accroche">MISE EN PLACE D'UNE APPLICATION WEB AVEC JAVA SPRING BOOT</h1>

      </div>
    </div>
  );
}
