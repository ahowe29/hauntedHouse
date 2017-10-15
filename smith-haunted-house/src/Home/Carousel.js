import React, { Component } from 'react'
import Slider from 'react-slick';
import board from '../assets/board.jpg'
import './Home.css';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <h3>Acclaim</h3>
        <Slider {...settings}>
          <div><a href="http://www.instructables.com/id/Arduino-Ouija-Board/"><img height="90%" width="90%" src={board}/><h5 className="car"> Ouija Board</h5></a></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
      </div>
    );
  }
}
