import React from "react";
import "./css/main.css";
import "./css/certifications.css";
import "./css/mediaScreen-certifications.css";

function Certifications() {
  return (
    <div className="main-container">
      <div
        style={{
          marginTop: 10,
          alignSelf: "center",
          padding: 20,
          color: "#533d3d",
          fontFamily: "Montserrat",
          width: "70%",
          flexDirection: "column",
        }}
        className="bloc-container"
      >
        <h2
          style={{
            fontSize: 18,
            color: "#C69599",
            fontWeight: "bold",
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          Informations relatives à mes certifications
        </h2>
        <p>
          <h2
            style={{
              fontSize: 14,
              color: "#C69599",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Certifications validées
          </h2>
          <p>
            <ul
              style={{
                fontSize: 14,
                fontFamily: "Montserrat",
              }}
            >
              <li>DEVOPS FOUNDATION</li>
              <li>
                LINUX : Reprenez le contrôle à l'aide de Linux ! (chez
                OpenClassrooms)
              </li>
              <li>
                DOCKER : Optimisez votre déploiement en créant des conteneurs
                avec Docker (chez OpenClassrooms)
              </li>
              <li>
                NODEJS : Des applications ultra-rapides avec Node.js (chez
                OpenClassrooms)
              </li>
              <li>
                JAVASCRIPT, JQUERY : Simplifiez vos développements JavaScript
                avec jQuery (chez OpenClassrooms)
              </li>
              <li>
                HTML5, CSS : Création de votre site web (chez OpenClassrooms)
              </li>
              <li>COMPRENDRE LE WEB (chez OpenClassrooms)</li>
              <li>
                MAINTENEZ-VOUS A JOUR EN DEVELOPPEMEMNT (chez OpenClassrooms)
              </li>
              <li>
                JAVASCRIPT : Apprenez à coder avec JavaScript (chez
                OpenClassrooms)
              </li>
              <li>
                PHP : Programmez en orienté objet en PHP (chez OpenClassrooms)
              </li>
              <li>
                SYMFONY : Développez votre site web avec le framework Symfony
                (chez OpenClassrooms)
              </li>
            </ul>
          </p>
        </p>
        <p>
          <h2
            style={{
              fontSize: 14,
              color: "#C69599",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Certifications en cours de préparation
          </h2>

          <p>
          <ul
              style={{
                fontSize: 14,
                fontFamily: "Montserrat",
              }}
            >
              <li>AWS Certified Solutions Architect - Associate</li>
              <li> Docker Certified Associate</li>
              <li> Terraform Certified Associate</li>
              <li> Red Hat Certified System Administrator (RHCSA) {"=>"} Administration Système Linux</li>
              <li> Red Hat Certified Engineer (RHCE) {"=>"} Maîriser Ansible </li>
            </ul>
          </p>
        </p>
      </div>
    </div>
  );
}

export default Certifications;
