import { Image } from 'antd'
import React from 'react'
import Slider from 'react-slick'

const SiderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySleep: 1000,
  }
  return (
    <Slider {...settings}>
      {arrImages.map((image) => {
        return (
          <Image
            src={image}
            alt="Slider"
            preview={false}
            width="100%"
            height="274px"
          ></Image>
        )
      })}
    </Slider>
  )
}

export default SiderComponent
