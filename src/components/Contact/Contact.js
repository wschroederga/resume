import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

export default class Contact extends Component {
  render() {
    return (
      <ScrollableAnchor id={'contact'}>
        <section>
          <div className="container-contact bg-grey flex-center">
            <h5 className="font-weight-bold txt-green">Dirección</h5>
            <a className="txt-white text-center mb-4" href="https://maps.google.com/?q=Remedios+de+Escalada+de+San+Martín+1576,+B1602EKB+Florida,+Buenos+Aires" target='_blank' rel="noopener noreferrer">
              Remedios de Escalada de San Martin<br />
              1576, Florida
            </a>
            <h5 className="font-weight-bold txt-green">Teléfono</h5>
            <a className="txt-white text-center mb-4" href="tel:+5491156995744">+54 (911) 5699-5744</a>
            <h5 className="font-weight-bold txt-green">E-mail</h5>
            <a className="txt-white text-center mb-4" href="mailto:walter.schroeder@gmail.com">walter.schroeder@gmail.com</a>
            <span>
              <a href="https://github.com/wschroederga"><i className="fab fa-github m-3 fa-2x"></i></a>
              <a href="https://www.linkedin.com/in/walter-demian-schroeder/"><i className="fab fa-linkedin m-3 fa-2x"></i></a>
            </span>
          </div>
          <div className="container-interest">
            <p>
              <span className="font-weight-bold">Intereses Actuales</span><br />
              Inteligencia Artifical<br />
              Desarrollo Mobile<br />
              Soluciones para la comunidad<br />
          </p>
            <p>
              <span className="font-weight-bold">Idiomas</span><br />
              Español (Lengua nativa)<br />
              Ingles (Bilingue)<br />
              Japonés (Intermedio)<br />
              Portugues (Básico)
          </p>
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}
