import React, { Component } from 'react'
import Slider from 'react-slick';
import board from '../assets/board.jpg'
import princess from '../assets/princessButtercup.JPG';
import peeps from '../assets/peeps.jpg';
import './Home.css';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <h3 >Acclaim</h3>
        <Slider {...settings}>
          <div><a href="http://www.instructables.com/id/Arduino-Ouija-Board/"><img className='bright2' style={{display: 'block', margin: '0 auto'}} height="60%" width="60%" src={board}/><h5 className="car"> Ouija Board</h5></a></div>
          <div><a href="https://kimsmith.crevado.com/"><img className='notbright' style={{display: 'block', margin: '0 auto', borderStyle:'solid', borderWidth:'1px', borderColor:'white'}} height="30%" width="30%" src={princess}/><h5 className="car">{"Kim's Portfolio"}</h5></a></div>
          <div><a href="https://www.washingtonpost.com/news/dc-sports-bog/wp/2016/03/16/jonathan-peepelbon-and-bryce-harper-in-incredible-peeps-form/?utm_term=.b57825adc54f"><img className='notbright' style={{display: 'block', margin: '0 auto', borderStyle:'solid', borderWidth:'1px', borderColor:'white'}} height="50%" width="50%" src={peeps}/><h5 className="car">{"Wash Post"}</h5></a></div>

        </Slider>
      </div>
    );
  }
}
