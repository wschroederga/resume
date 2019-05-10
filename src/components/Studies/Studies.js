import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import experiences from './Studies.json'

export default class Studies extends Component {

  render() {
    return (
      
        <section className="container-picto-left">
          <ScrollableAnchor id={'studies'}>
            <div className="container-picto">
              <div className="picto-box">
                <img className="cercle-anim"src={process.env.PUBLIC_URL+'/assets/img/picto_cercle.svg'} alt="cercle"/>
                <img className="picto" src={process.env.PUBLIC_URL+'/assets/img/picto_etudes.svg'} alt="études"/>
              </div>
              <h4 className="font-weight-bold mt-2">Estudios</h4>
            </div>
          </ScrollableAnchor>

          <div className="container-content bg-grey">
            <div className="container-date">
              {experiences.map((para, index) => (
              <div className="date-box text-center" key={index}>
                <span className="font-weight-bold text-light">{para.date}</span>
                <h5 className="text-uppercase font-weight-bold txt-green mb-0">{para.diplome}</h5>
                <h5 className="text-uppercase font-weight-bold txt-green">{para.option}</h5>
                <span className="font-weight-bold txt-grey">{para.place}</span><br/>
              </div>
              )
              )}
            </div>
          </div>
        </section>
    )
  }
}
