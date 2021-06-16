import React from 'react'
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" />
            </Wrap>

        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
margin-top: 20px;
ul li button{
    &:before {
        font-size: 10px;
        color: #EBA83A;
    }
}
li.slick-active-button::before{
    color: white;
}
.slick-list {
    overflow: visible;
}
button {
    z-index: 1;
}
`
const Wrap = styled.div`
cursor: pointer;
     img {
         border: 4px solid transparent;
         border-radius: 14px;
         width: 100%;
         height: 100%;
         box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
         transition-duration: 600ms;
         &:hover {
                   border-width: 2px ;
                   border-top: -50% ;
                   border-left: -50% ;
                   border{ z-index: -9 ; 
                 }
                border 
                  { 
                     height: 200%;
                     width: 50%;
                     transform: rotate(-45deg);
                     overflow: hidden; 
                   } 
                      background: linear-gradient(to right, #EBA83A 20%, #fff 40%, #ECD08C 50%, #ECD08C 55%, #fff 70%, #fff 100%);
                      background-size: 200% auto;
                      animation: shine 3s linear infinite;
                         -moz-box-shadow: 1px 2px 3px rgba(0,0,0,.5);
                         -webkit-box-shadow: 1px 2px 3px rgba(0,0,0,.5);
                          box-shadow: 1px 2px 3px rgba(0,0,0,.5);
                }
              /*Begin shimmer code*/
              @keyframes shine {
                  to {
                    background-position: 200% center;
                  }
                }fff
            }        
         }
     }
`