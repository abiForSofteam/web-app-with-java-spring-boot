import React from 'react'
import "./css/main.css"
import "./css/informations-techniques.css"

function InformationsTechniques() {
  return (
    <div className="main-container">
        <div style={{marginTop:10, alignSelf:"center", padding:20, color:"#533d3d", fontFamily:"Montserrat", width:"70%"}} className="bloc-container">
        
        <h2 style={{fontSize:18, color:"#C69599", fontWeight:"bold", marginBottom:20}}>Informations techniques relatives à la réalisation de ce site</h2>
        <p style={{color:"#C69599", fontSize:14, fontFamily:"Montserrat",}}>Je tiens tout d'abord à préciser que ce site est en cours de développement;
             il se pourrait donc qu'il y ait des modifications aussi bien dans le contenu textuel que dans la structure du site. 
             En effet, j'ai l'intention d'y inclure mes autres réalisations ultérieurement.</p>
             
             
          <p style={{color:"#533d3d", fontSize:14, fontFamily:"Montserrat",}}>
          Pour la mise en oeuvre de ce site, j'ai utilisé AWS Amplify.
          Non seulement AWS Amplify facilite le développement d’applications et
          de sites web, mais il permet également leur déploiement dans le Cloud.
          </p>

          <p style={{color:"#533d3d", fontSize:14, fontFamily:"Montserrat",}}>
            J'utilise <span style={{fontWeight:"bold"}}>le service S3 (Simple Storage Service)</span> de AWS pour stocker mes fichiers.
            J'ai également mis en place un pipeline avec <span style={{fontWeight:"bold"}}>le servive CodePipeline</span>  de AWS, pour automatiser le déploiement de mon contenu sur S3.
            Ainsi, lorsque je push une mise à jour sur mon dépot GitHub, la modification s'opère automatiquement dans mon compartiment S3.
          </p>
          <p style={{color:"#533d3d", fontSize:14, fontFamily:"Montserrat",}}>
           J'utilise <span style={{fontWeight:"bold"}}>le service CloudFront</span> de AWS pour servir les pages aux utilisateurs avec une faible latence, donc avec les meilleures délais possibles.
           Ce service me permet également de passer de http à https.
           Ce réseau de diffusion de contenu (CDN) me permet aussi de définir mes sous-domaines (cname),...
          </p>
          <p style={{color:"#533d3d", fontSize:14, fontFamily:"Montserrat",}}>
           Lorsque le contenu de mon compartiment S3 change, afin que les utilisateurs puissent accéder à ce nouveau contenu, le cache de CloudFront doit également être mis à jour.
           Pour éviter de répéter manuellement ce processus, j'ai mis en oeuvre <span style={{fontWeight:"bold"}}>le service Lambda</span> de AWS, en créant une fonction avec le runtime <span style={{fontWeight:"bold"}}>Python 3.8</span>.
          </p>
          <p style={{color:"#533d3d", fontSize:14, fontFamily:"Montserrat", fontWeight:"600"}}>D'autres détails suivront ultérieurement...</p>
        </div>

    </div>
  )
}

export default InformationsTechniques