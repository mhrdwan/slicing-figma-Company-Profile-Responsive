import React, { Component } from "react";
import Slider from "react-slick";
import imgf1 from "../assets/img/imgf1.png";
import imgf2 from '../assets/img/imgf2.png'
import imgf3 from '../assets/img/imgf3.png'
import imgf4 from '../assets/img/imgf4.png'


export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
            
          }
        }
        
      ]
    };
   
    return (
        <section className='fitur overflow-hidden'>
        <div className="container position-relative mt-3">
         <div className="row">
         <div className="col-lg-9 col-md-12 text-center text-lg-start">
                <h2>Fitur Rumah</h2>
               
                </div>
                <div className="col-lg-3 col-md-12 ">
                <button className="btn-fitur mb-4">Lihat Semua..</button>
                </div>
                <div className="col-12  justify-content-start ">
              
              <Slider {...settings}>
                <div>
                  <div className="card-fiture mx-4 position-relative">
                    <img src={imgf1} alt="" />
                
                  </div>
                </div>
                <div>
                  <div className="card-fiture mx-4 position-relative">
                    <img src={imgf2} alt="" />
                  </div>
                </div>
                <div>
                  <div className="card-fiture mx-4 position-relative">
                    <img src={imgf1} alt="" />
                  </div>
                </div>
                <div>
                  <div className="card-fiture mx-4 position-relative">
                    <img src={imgf4} alt="" />
                  </div>
                </div>
                <div>
                  <div className="card-fiture mx-4 position-relative">
                    <img src={imgf2} alt="" />
                  </div>
                </div>
                <div>
                  <div className="card-fiture mx-4 position-relative">
                    <img src={imgf4} alt="" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        </section>
    );
  }
}
