import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Skills extends Component {
  render() {
    return (
        <section className="container-picto-left">
          <ScrollableAnchor id={'skills'}>
            <div className="container-picto">
              <div className="picto-box">
                <img className="cercle-anim" src={process.env.PUBLIC_URL+'/assets/img/picto_cercle.svg'} alt="cercle"/>
                <img className="picto" src={process.env.PUBLIC_URL+'/assets/img/picto_comp.svg'} alt="cercle"/>
              </div>
              <h4 className="font-weight-bold mt-2">Competencias</h4>
            </div>
          </ScrollableAnchor>

          <div className="container-content bg-grey">
            <div className="skills-container">

            <div className="logo-skill flex-center">
                <i className="devicon-react-original icon"></i>
                <div className="text-icon font-weight-bold">REACT</div>
              </div>            

            <div className="logo-skill flex-center">
                  <i className="devicon-python-plain icon"></i>
                  <div className="text-icon font-weight-bold">PYTHON</div>
              </div>

              <div className="logo-skill flex-center">
                  <i className="devicon-go-plain icon"></i>
                  <div className="text-icon font-weight-bold">GO</div>
              </div>

              <div className="logo-skill flex-center">
                  <i className="devicon-android-plain icon"></i>
                  <div className="text-icon font-weight-bold">ANDROID</div>
              </div>              

            <div className="logo-skill flex-center">
                <img className="logo-image icon" src={process.env.PUBLIC_URL+'/assets/img/flutter_logo.svg'} alt="flutter"/>
                <div className="text-icon font-weight-bold">FLUTTER</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-css3-plain icon"></i>
                <div className="text-icon font-weight-bold">CSS3</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-javascript-plain icon"></i>
                <div className="text-icon font-weight-bold">JAVASCRIPT</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-git-plain icon"></i>
                <div className="text-icon font-weight-bold">GIT</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-visualstudio-plain icon"></i>
                <div className="text-icon font-weight-bold">VISUAL STUDIO</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-linux-plain icon"></i>
                <div className="text-icon font-weight-bold">LINUX</div>
              </div>

              <div className="logo-skill flex-center">
                <img className="logo-image icon" src={process.env.PUBLIC_URL+'/assets/img/sap_logo.svg'} alt="sap"/>
                <div className="text-icon font-weight-bold">SAP</div>
              </div>

              <div className="logo-skill flex-center">
                <i className="devicon-oracle-original icon"></i>
                <div className="text-icon font-weight-bold">ORACLE</div>
              </div>                  

              <div className="logo-skill flex-center">
                  <i className="devicon-docker-plain icon"></i>
                  <div className="text-icon font-weight-bold">DOCKER</div>
              </div>

              <div className="logo-skill flex-center">
                  <i className="devicon-nginx-original icon"></i>
                  <div className="text-icon font-weight-bold">NGINX</div>
              </div>              

              <div className="logo-skill flex-center">
                  <img className="logo-image" src={process.env.PUBLIC_URL+'/assets/img/dialogflow_logo.svg'} alt="dialogflow"/>
                  <div className="text-icon font-weight-bold">DIALOGFLOW</div>
              </div>

              <div className="logo-skill flex-center">
                  <i className="fa fa-sync-alt icon"></i>
                  <div className="text-icon font-weight-bold">METODOLOGIAS AGILES</div>
              </div>

              <div className="logo-skill flex-center">
                  <i className="fas fa-project-diagram icon"></i>
                  <div className="text-icon font-weight-bold">PROCESOS DE NEGOCIO</div>
              </div>              

            </div>
          </div>
        </section>
    )
  }
}
