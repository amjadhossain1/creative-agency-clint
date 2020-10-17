import React from 'react';
import {  Container } from 'react-bootstrap';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import './Slider.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = () => {
    const allCarousel=[carousel1, carousel2, carousel3]

    const responsive = {
        superLargeDesktop: {          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='slider-container'>
            <Container>
                <div style={{marginBottom:'80px'}}>
                    <h4 style={{color:'white',fontSize:'34px', fontWeight:'600'}} className='text-center'>
                        Here are some of <span className='color-brand'>our works</span>
                    </h4>
                </div>
                
                <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000}
                    keyBoardControl={true}  dotListClass="custom-dot-list-style" showDots={true}>
                    {
                        allCarousel.map(carousel => {
                            return(
                                <div>
                                    <img className='carousel-image' src={carousel} alt=""/>
                                </div>
                            )
                        })
                    }
                </Carousel>;
            </Container>
        </div>
    );
};

export default Slider;