import React from 'react';
import Banner1 from '../assets/images/ajadi_banner.jpg';
import Banner2 from '../assets/images/sabka_banner.jpg';
import Banner3 from '../assets/images/mann_kibaat.jpg';
import Slider from 'react-slick';

function HomeSlider() {
    const bannerSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: true,
                },
            },
        ],
    };
    return (
        <>

            <div className="w-100" style={{ overflow: 'hidden' }}>
                <Slider {...bannerSettings}>
                    <div><img src={Banner1} alt="Banner 1" className="img-fluid w-100" /></div>
                    <div><img src={Banner2} alt="Banner 2" className="img-fluid w-100" /></div>
                    <div><img src={Banner3} alt="Banner 3" className="img-fluid w-100" /></div>
                </Slider>
            </div>

        </>
    )
}

export default HomeSlider
