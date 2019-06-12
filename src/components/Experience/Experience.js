import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import experiences from './Experience.json'

export default class Experience extends Component {


  render() {
    return (
      
        <section className="container-picto-right">
          <ScrollableAnchor id={'experience'}>
            <div className="container-picto">
              <div className="picto-box">
                <img className="cercle-anim"src={process.env.PUBLIC_URL+'/assets/img/picto_cercle.svg'} alt="cercle"/>
                <img className="picto" src={process.env.PUBLIC_URL+'/assets/img/picto_exp.svg'} alt="experiences"/>
              </div>
              <h4 className="font-weight-bold mt-2">Experience</h4>
            </div>
          </ScrollableAnchor>

          <div className="container-content bg-grey-op-095">
            <div className="container-date">
              {experiences.map((para, index) => (
              <div key={index} className="date-box text-center">
                <span className="font-weight-bold text-light">{para.date}</span>
                <h5 className="font-weight-bold txt-green mb-0">{para.company}</h5>
                <span className="font-weight-bold txt-grey">{para.project}</span><br/>
                <span className="font-weight-bold txt-grey">{para.position}</span>
                </div>
              )
              )}
            </div>
          </div>
        </section>
    )
  }
}
