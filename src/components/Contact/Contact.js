import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Contact extends Component {
  render() {
    return (
      <ScrollableAnchor id={'contact'}>
        <section>
          <div className="container-contact bg-grey flex-center">
            <h5 className="font-weight-bold txt-green">Address</h5>
            <a className="txt-white text-center mb-4" href="https://maps.google.com/?q=Remedios+de+Escalada+de+San+Martín+1576,+B1602EKB+Florida,+Buenos+Aires" target='_blank' rel="noopener noreferrer">
              Remedios de Escalada de San Martin<br />
              1576, Florida
            </a>
            <h5 className="font-weight-bold txt-green">Phone</h5>
            <a className="txt-white text-center mb-4" href="tel:+5491156995744">+54 (911) 5699-5744</a>
            <h5 className="font-weight-bold txt-green">E-mail</h5>
            <a className="txt-white text-center mb-4" href="mailto:walter.schroeder@gmail.com">walter.schroeder@gmail.com</a>
            <span>
              <a href="https://github.com/wschroederga" target='_blank' rel="noopener noreferrer"><i className="fab fa-github m-3 fa-2x"></i></a>
              <a href="https://www.linkedin.com/in/walter-demian-schroeder/" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin m-3 fa-2x"></i></a>
            </span>
          </div>
          <div className="container-interest">
            <p>
              <span className="font-weight-bold">Interests</span><br />
              Artificial Inteligence<br />
              Mobile Solutions<br />
              Tools for the Community<br />
          </p>
            <p>
              <span className="font-weight-bold">Languages</span><br />
              Spanish (Native)<br />
              English (Advance)<br />
              Japanese (Intermediate)<br />
              Portuguese (Initial)
          </p>
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}
