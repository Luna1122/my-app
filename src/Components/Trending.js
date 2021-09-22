import React from 'react'
import Slider from "react-slick";
import './trending.css'


const Trending = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <div className="container-fluid shadow-lg mt-4 mb-3 ml-1 mr-1 py-5">
                <Slider {...settings}>
                    <div>
                        <img src="./images/1.jpg" className="img-fluid custom-slide" alt=""/>
                    </div>
                    <div>
                    <img src="./images/2.jpg" className="img-fluid custom-slide" alt=""/>
                    </div>
                    <div>
                    <img src="./images/3.jpg" className="img-fluid custom-slide" alt=""/>
                    </div>
                    <div>
                    <img src="./images/4.jpg" className="img-fluid custom-slide" alt=""/>
                    </div>
                    <div>
                    <img src="./images/5.jpg" className="img-fluid custom-slide" alt=""/>
                    </div>
                    <div>
                    <img src="./images/6.jpg" className="img-fluid custom-slide" alt=""/>
                    </div>
                    <div>
                    <img src="./images/7.jpg" className="img-fluid custom-slide" alt=""/>
                    </div>
                    <div>
                    <img src="./images/8.jpg" className="img-fluid custom-slide" alt=""/>
                    </div>
                </Slider>
            </div>

        </>
    )
}

export default Trending
