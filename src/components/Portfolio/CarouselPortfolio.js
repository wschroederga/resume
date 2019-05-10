import React, { Component } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';
import ReactPlayer from 'react-player'
import portfolio from './Portfolio.json'

export default class CarouselPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      fullImage: false
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggleFullImage = this.toggleFullImage.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === portfolio.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? portfolio.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  toggleFullImage() {
    this.setState({ fullImage: !this.state.fullImage });
  }  

  render() {
    const { activeIndex } = this.state;

    const slides = portfolio.map((item, index) => {
      const play = this.state.activeIndex===index?true:false
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <div className="flex-center">
            {item.src !== '' ?
              <img className={!this.state.fullImage?"img-fluid-slide":"img-fluid-full"} src={process.env.PUBLIC_URL+item.src} alt={item.altText} onClickHandler={this.toggleFullImage} />
            :null}
            {item.video !== '' ?
              <ReactPlayer url={process.env.PUBLIC_URL+item.video} playing={play} controls light/>
            :null}
          </div>
          <div className="info-box">
            <h1 className="text-center txt-green mt-4">{item.title}</h1>
            
              <p className="text-center txt-grey mb-0">
              {item.link !== '' ?
                <a href={item.link} target='_blank' rel="noopener noreferrer"><i className="fas fa-desktop m-2 fa-lg"></i></a>
              :null}
              {item.github !== '' ?
                <a href={item.github} target='_blank' rel="noopener noreferrer"><i className="fab fa-github m-2 fa-lg"></i></a>
              :null}
              </p>
            
            <div className="info-item">
              <p className="text-center font-weight-bold txt-grey mt-2 mb-0 info-item-desc">{item.description}</p>
              <p className="text-center">{item.tools.map((tool, index) =>{
                  return (
                    <span className ="badge badge-secondary m-1 bg-green txt-dark-grey" key={index}>{tool}</span>
                  )
              })}</p>
            </div>
          </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={false}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}
