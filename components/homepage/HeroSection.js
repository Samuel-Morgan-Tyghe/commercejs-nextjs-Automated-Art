import React from "react";
import { Autoplay, EffectFade, Swiper as SwiperCore } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const params = {
  slidesPerView: 1,
  watchOverflow: false,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
};
const images = [
  "/illustration-1.jpg",
  "/illustration-2.jpg",
  "/illustration-3.jpg",
  "/illustration-4.jpg",
  "/illustration-5.jpg",
  "/illustration-6.jpg",
  "/illustration-7.jpg",
  "/illustration-8.jpg",
  "/illustration-9.jpg",
  "/illustration-10.jpg",
];

export default function HeroSection() {
  SwiperCore.use([Autoplay, EffectFade]);
  return (
    <div className="hero-section position-relative">
      <Swiper {...params}>
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <div
              className="hero-slide d-flex align-items-center justify-content-center flex-column font-color-white py-5"
              style={{
                backgroundImage: `url("${image}")`,
              }}
            >
              <p className="font-size-display5 font-family-secondary mb-4 text-center hero-header">
                The Artwork You Never Knew You Needed
              </p>
              <p className="text-transform-uppercase font-size-title mb-5 hero-subheader">
                A range of styles for you
              </p>
              <Link href="/collection">
                <a className="d-flex align-items-center bg-transparent border border-color-white h-56 px-5 font-color-white hero-btn">
                  Shop now
                </a>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
