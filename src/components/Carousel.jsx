import RuckusLogo from "../images/ruckus-logo.svg";
import RunItBackLogo from "../images/runitback-logo.svg";
import VeryCoolLogo from "../images/very-cool-logo.svg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Carousel() {
  return (
    <>
      <div className="content">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={25}
          centeredSlides={true}
        >
          <SwiperSlide>
            <a href="https://www.ruckuslabs.co">
              <figure className="frame">
                <img src={RuckusLogo} alt="Ruckus Labs logo." />
              </figure>
              <h3>Ruckus Labs ↗</h3>
              <p>A studio dedicated to the pursuit of empathetic design.</p>
            </a>

          </SwiperSlide>
          <SwiperSlide>
            <a href="https://ruckuslabs.github.io/runitback/">
              <figure className="frame">
                <img src={RunItBackLogo} alt="RunItBack logo." />
              </figure>
              <h3>RunItBack ↗</h3>
              <p>A tool to help you export your data from Dribbble.</p>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://damianmakki.github.io/verycoolweekly/">
              <figure className="frame">
                <img src={VeryCoolLogo} alt="Very Cool logo." />
              </figure>
              <h3>Very Cool ↗</h3>
              <p>A newsletter for designers and developers.</p>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}